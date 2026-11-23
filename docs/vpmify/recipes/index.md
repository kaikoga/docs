---
sidebar_position: 1
---

# Writing recipes

<AiGeneratedBadge />

A recipe is a JSON file that says where to get packages, and how to fix them up into VPM packages.
Vpmify reads the recipe and makes the lists of the versions of the packages. For the versions the user chooses, it converts the original packages into VPM packages, and registers them with ALCOM.

[//]: # (編集時の注意：レシピの完全なスキーマは Vpmify のリポジトリが正。リポジトリを公開したら、スキーマのドキュメントへのリンクを足す)

## An example recipe

This is a simple recipe that offers a package of OpenUPM as a VPM package, as it is.

```json
{
  "vpmifyFormat": 1,
  "url": "https://example.com/com.example.needle-deeplink.json",
  "id": "com.example.needle-deeplink",
  "displayName": "Needle Deeplink",
  "sources": [
    {
      "type": "npm",
      "registry": "https://package.openupm.com",
      "packages": [
        { "name": "com.needle.deeplink" }
      ]
    }
  ]
}
```

- `vpmifyFormat`: the format of the recipe itself. It is `1`.
- `url`: (optional) the URL where the recipe is published.
- `id`: the identifier of the recipe.
  Write it in reverse domain name notation, as the ids of VPM repositories are.
  It takes lowercase letters, digits, `.`, `_` and `-`.
- `displayName`: the name of the recipe.
- `sources`: where to get the packages.
  - When `"type"` is `"npm"`, it is an [npm source](npm.md).
  - When `"type"` is `"github"`, it is a [GitHub source](github.md).

## Trying a recipe

```sh
vpmify recipe add ./my-recipe.json
vpmify recipe versions --all com.example.needle-deeplink
vpmify package pull com.example.needle-deeplink
```

- `recipe add` adds the recipe.
- `recipe versions --all` shows the versions in the recipe.
- `package pull` registers the newest version of each package in the recipe with ALCOM.
  To name a version, write it like `package pull com.example.needle-deeplink@1.2.3`.

To make Vpmify read a local recipe again after you change it, follow the steps above again.

## Sharing a recipe

Put the recipe on the web to share it with others.
A link of the form `vpmify://recipe/add?url=<https URL of the recipe>` adds it in the GUI.
