---
sidebar_position: 11
---

# GitHub sources

<AiGeneratedBadge />

For each tag of a GitHub repository, Vpmify makes package versions from the contents of the repository at that tag.

## How to write

This is an example of a GitHub source.
Write it under `sources` in a recipe.

```json
{
  "type": "github",
  "url": "https://github.com/vrm-c/UniVRM",
  "tags": ">=0.131.0",
  "packages": [
    { "name": "com.vrmc.gltf", "path": "Packages/UniGLTF" }
  ]
}
```

- `type`: `"github"` for a GitHub source.
- `url`: the URL of the GitHub repository. Example: `https://github.com/<owner>/<repo>`
- `tags`: (optional) the range of the versions of the releases that the recipe reads.
- `packages.path`: (optional) where the package is in the repository (the directory that has its `package.json`). The root of the repository when omitted.

## Reading releases

In Vpmify, a **release** is the set of package versions made from a tag of the repository.

A release has a version.
How the recipe reads releases from the repository is decided by `tagVersion` and `tags`.

### `tagVersion`

The name of a tag is turned into the version of the release by the rule in `tagVersion`.

#### The default format

When `tagVersion` is not given, Vpmify drops a leading `v` or `V` from the name of the tag, and reads the rest as SemVer. That is the version of the release.

Both `v1.2.3` and `1.2.3` are read as the release of version `1.2.3`.
Tags such as `v1.2` or `release-1.2.3` are ignored.

#### A custom format

To give `tagVersion`, write it as follows.

```json
"tagVersion": {
  "match": "(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
  "version": "{1}.{2}.{3}{4:03}"
}
```

- `match`: a regular expression that must match the whole name of the tag. Tags it does not match are ignored.
- `version`: a template that turns the match into the string of the version.
  - `{1}` is the first group.
  - `{4:03}` is the fourth group, padded with zeros to 3 digits.
  - A group that did not match is `0`.

In the example above, the tag `0.15.2.2` becomes the release `0.15.2002`, and the tag `0.15.2` becomes the release `0.15.2000`.

### `tags`

When `tags` is not given, every release whose tag matched is read.

When `tags` gives a [range](ranges.md), only the releases whose versions are in the range are read. Versions out of the range are ignored.

## Reading packages

For each release, Vpmify reads the `package.json` in the directory the recipe gives, and reads it as a version of the package, following the recipe.

Unless the recipe says otherwise, the version of the package is the `version` read from `package.json`.
When several releases have the same version of a package, the package in the oldest release becomes that version of the package.

:::info[INFO]
When a package has the same version in several releases, the version of the package is taken from one of the releases, as follows.

- The package in the release with the oldest version is taken.
- When several releases have the oldest version, Vpmify warns.
:::

## Git submodules

Due to technical constraints, Vpmify does not resolve submodules in GitHub repositories.
So for a repository with submodules, the files in the submodules need to be read in addition.
`overlays` put the contents of a commit of another GitHub repository into an empty directory.

This example adds the contents of a submodule to the `VRM/MToon` directory in the package.

```json
"overlays": [
  {
    "tags": ">=0.107.0 <0.124.2",
    "path": "VRM/MToon",
    "url": "https://github.com/Santarh/MToon",
    "commit": "42b03163459ac8e6b7aee08070d0f4f912035069"
  }
]
```

- `tags`: (optional) when given, applies only when the version of the release is in the [range](ranges.md). When omitted, applies to every release.
- `path`: where to put the contents, as a path relative to the root of the package.
- `url`: the repository to get the contents from.
- `commit`: the commit hash of the contents.

The directory to put them in must be empty.

When the contents cannot be put in place, the version is not made.

## Several packages in one repository

In a GitHub source, one repository can contain several packages.
List each package with its `name` and `path` in `packages`.

```json
"packages": [
  { "name": "com.virtualcast.univci", "path": "Assets/VCI" },
  { "name": "com.thirdparty.effekseer", "path": "Assets/Effekseer" }
]
```

Dependencies between packages in the same release can be written with `{sameTag}` (see [Overriding package.json](fix_package_json.md)).
