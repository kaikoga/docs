---
sidebar_position: 10
---

# npm sources

<AiGeneratedBadge />

You can use packages on npmjs or OpenUPM as a source.

## How to write

This is a simple npm source that offers a package of OpenUPM as it is.

```json
{
  "type": "npm",
  "registry": "https://package.openupm.com",
  "packages": [
    { "name": "com.needle.deeplink" }
  ]
}
```

- `type`: `"npm"` for an npm source.
- `registry`: the URL (HTTPS) of the registry, such as npmjs or OpenUPM.
- `packages`: the packages to get.
- `packages.name`: the `name` in the `package.json` of the package in the source.

## Packages on npm

In an npm source, the versions released on npm become the versions of the package as they are.
