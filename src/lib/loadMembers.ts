interface MembersApiResponse {
  list?: unknown[];
}

interface LoadedMember {
  id: string;
  name: string;
  description?: string | null;
  skills: string[];
  type: string;
  publicPhotoId?: string;
  publicPhotoName?: string;
  publicDescription?: string | null;
  publicLink?: string;
  cWebsiteLink?: string[] | null;
  cLinkedIn?: string | null;
  cPublicJobTitle?: string;
}

interface LoadMembersResult {
  list: LoadedMember[];
  loaded: boolean;
}

const MEMBERS_FETCH_TIMEOUT_MS = 5000;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getOptionalString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function getOptionalNullableString(value: unknown): string | null | undefined {
  return value === null || typeof value === "string" ? value : undefined;
}

function getStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is string => typeof item === "string");
}

function toLoadedMember(value: unknown): LoadedMember | null {
  if (!isRecord(value)) {
    return null;
  }

  const id = getOptionalString(value.id);
  const name = getOptionalString(value.name);
  const type = getOptionalString(value.type);

  if (!id || !name || !type) {
    return null;
  }

  return {
    id,
    name,
    type,
    skills: getStringArray(value.skills),
    description: getOptionalNullableString(value.description),
    publicPhotoId: getOptionalString(value.publicPhotoId),
    publicPhotoName: getOptionalString(value.publicPhotoName),
    publicDescription: getOptionalNullableString(value.publicDescription),
    publicLink: getOptionalString(value.publicLink),
    cWebsiteLink: getStringArray(value.cWebsiteLink),
    cLinkedIn: getOptionalNullableString(value.cLinkedIn),
    cPublicJobTitle: getOptionalString(value.cPublicJobTitle),
  };
}

export async function loadMembers(
  rootApi?: string,
  apiKey?: string,
): Promise<LoadMembersResult> {
  if (!rootApi || !apiKey) {
    return { list: [], loaded: false };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      MEMBERS_FETCH_TIMEOUT_MS,
    );

    try {
      const response = await fetch(new URL("/api/v1/Contact", rootApi), {
        headers: {
          "X-api-key": apiKey,
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        return { list: [], loaded: false };
      }

      const data = (await response.json()) as MembersApiResponse;

      if (!Array.isArray(data.list)) {
        return { list: [], loaded: false };
      }

      const list = data.list
        .map((item) => toLoadedMember(item))
        .filter((item): item is LoadedMember => item !== null);

      return {
        list,
        loaded: data.list.length === 0 || list.length > 0,
      };
    } finally {
      clearTimeout(timeoutId);
    }
  } catch {
    return { list: [], loaded: false };
  }
}
