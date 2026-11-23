---
sidebar_position: 20
---

# Overriding package.json

<AiGeneratedBadge />

When a package is converted, `overrides` can fix its `package.json`, to give the values a VPM package needs, or to add dependencies.

## Format

- `versions`: (optional) applies when the version of the package is in the [range](ranges.md).
- `set`: (optional) replaces top-level values of `package.json`. A `null` value removes the key instead.
- `merge`: (optional) merges definitions such as `dependencies` or `vpmDependencies` into the existing ones in `package.json`. A `null` value removes the key instead.

Overrides are applied from top to bottom.

`overrides` cannot change `name` and `version`.

## Fixing values

To fix the `unity` value of `package.json` for some versions, so that ALCOM tells the supported Unity versions correctly, use an override.

```json
{
  "name": "mu.cluster.cluster-creator-kit",
  "overrides": [
    {
      "versions": ">=3.4.0",
      "set": { "unity": "6000.2", "unityRelease": "6f2" }
    }
  ]
}
```

## Adding VPM dependencies

To give UPM `dependencies` as VPM `vpmDependencies`, so that ALCOM resolves the dependencies, use an override.

```json
"overrides": [
  { "set": { "vpmDependencies": { "com.thirdparty.effekseer": "={sameTag}" } } },
  { "versions": ">=0.33.0", "merge": { "vpmDependencies": { "com.vrmc.univrm": "={dependencies}" } } }
]
```

In the version of each package listed in `vpmDependencies`, these placeholders can be used.

- `{version}`: the version of the package itself.
- `{dependencies}`: the version given to that package in the `dependencies` of the package's `package.json`.
- `{sameTag}`: for a package in the same GitHub source, its version in the same release (tag).

:::info[INFO]
Make sure the result is in the range syntax of VPM.

`>=1.2.1` means "version 1.2.1 or newer", and `=1.2.3` means "exactly version 1.2.3".
:::

## Adding UPM dependencies

To add dependencies from Unity's registry (`com.unity.*`), use an override.

```json
{ "versions": ">=0.35.0 <0.42.0", "merge": { "dependencies": { "com.unity.textmeshpro": "3.0.6" } } }
```

## Dependencies from other places

With several sources in one recipe, you can put a package and the packages it depends on together in one recipe.

This example gets Vket Cloud SDK from npmjs, and Needle Deeplink, which Vket Cloud SDK depends on, from OpenUPM (excerpt).

```json
"sources": [
  {
    "type": "npm",
    "registry": "https://registry.npmjs.com",
    "packages": [
      {
        "name": "com.hikky.vketcloudsdk",
        "overrides": [
          { "set": { "vpmDependencies": { "com.needle.deeplink": ">=1.2.1" } } }
        ]
      }
    ]
  },
  {
    "type": "npm",
    "registry": "https://package.openupm.com",
    "packages": [
      { "name": "com.needle.deeplink" }
    ]
  }
]
```

:::note[NOTE]
Even when the package depended on is not in the recipe, `package pull` registers it with ALCOM if another recipe has it as a VPM package.
:::
