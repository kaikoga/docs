---
sidebar_position: 21
---

# Other syntax

<AiGeneratedBadge />

## Overriding the version of a package with the tag

In a GitHub source, when several releases have the same `version` in `package.json`, the versions of the package cannot be told apart.

When `versionFromTag` is `true`, the version of the release overwrites the `version` in `package.json`.
As a result, the version in each tag is read under a version name based on the tag.

When `versionFromTag` is `{ "tags": "<range>" }`, it applies only to the releases in the [range](ranges.md) instead.

```json
{ "name": "app.warudo.modtool", "versionFromTag": true }
```

## Following directory structure

In a GitHub source, when the package moved from `Assets/` to `Packages/` between releases, use `paths` in place of `path`, as follows.

```json
"paths": [
  { "tags": "<0.131.0", "path": "Assets/VRM" },
  { "tags": ">=0.131.0", "path": "Packages/VRM" }
]
```

- The [ranges](ranges.md) must not overlap.
- In a release that is in no range, the package is treated as having no version.

## Old dependencies

`package pull` without a package pulls the newest version of every package.
When `onDemand` is `true`, the package is left out of the default `pull`.

```json
{ "name": "com.vrmc.unigltf", "onDemand": true }
```

Use it to define dependencies of old versions of a package.
