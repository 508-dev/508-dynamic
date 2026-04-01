interface MembersApiResponse {
  list?: unknown[];
}

interface LoadMembersResult {
  list: unknown[];
  loaded: boolean;
}

export async function loadMembers(
  rootApi?: string,
  apiKey?: string,
): Promise<LoadMembersResult> {
  if (!rootApi || !apiKey) {
    return { list: [], loaded: false };
  }

  try {
    const response = await fetch(new URL("/api/v1/Contact", rootApi), {
      headers: {
        "X-api-key": apiKey,
      },
    });

    if (!response.ok) {
      return { list: [], loaded: false };
    }

    const data = (await response.json()) as MembersApiResponse;

    return {
      list: Array.isArray(data.list) ? data.list : [],
      loaded: true,
    };
  } catch {
    return { list: [], loaded: false };
  }
}
