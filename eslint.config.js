import eslintPluginAstro from 'eslint-plugin-astro';
export default [
    // add more generic rule sets here, such as:
    // js.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
            // "prettier/prettier": [
            //     "warn",
            //     {
            //         "bracketSpacing": true,
            //         "printWidth": 80,
            //         "singleQuote": true,
            //         "trailingComma": "es5",
            //         "tabWidth": 2,
            //         "useTabs": false,
            //         "endOfLine": "auto"
            //     }
            // ]

        }
    }
];
