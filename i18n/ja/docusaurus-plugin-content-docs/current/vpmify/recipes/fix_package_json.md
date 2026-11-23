---
sidebar_position: 20
---

# package.jsonのオーバーライド

<AiGeneratedBadge />

パッケージを変換する際、 `overrides` で `package.json` を修正し、VPMパッケージとして必要な値や、追加の依存性を定義できます。

## 書式

- `versions`: （任意）パッケージのバージョンが [範囲](ranges.md) に含まれる場合に適用します。
- `set`: （任意）`package.json` のトップレベルの値を置き換えます。値が `null` の場合、代わりにキーを削除します。
- `merge`: （任意）`dependencies` や `vpmDependencies` などの定義を `package.json` の既存の定義とマージして追加します。値が `null` の場合、代わりにそのキーを削除します。

オーバーライドは上から順に適用されます。

`overrides` の仕組みでは、 `name` と `version` はオーバーライドできません。

## 値の修正

特定のバージョンで `package.json` の `unity` の値を修正し、 ALCOM で対応 Unity バージョンを正しく判定させたい場合、オーバーライドを利用できます。

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

## VPM依存性の追加

UPMの `dependencies` をVPMの `vpmDependencies` として指定して、 ALCOM 側で依存性を解決したい場合、オーバーライドを利用できます。

```json
"overrides": [
  { "set": { "vpmDependencies": { "com.thirdparty.effekseer": "={sameTag}" } } },
  { "versions": ">=0.33.0", "merge": { "vpmDependencies": { "com.vrmc.univrm": "={dependencies}" } } }
]
```

`vpmDependencies` で指定する依存先のパッケージのバージョン指定では、以下の置き換えパターンを利用できます。

- `{version}`: パッケージ自身のバージョン。
- `{dependencies}`: パッケージの `package.json` で、 `dependencies` で依存先のパッケージに指定されたバージョン。
- `{sameTag}`: 同じ GitHub のソースに含まれるパッケージについて、同じリリース（ tag ）に含まれるバージョン。

:::info[INFO]
VPMの範囲指定の書式で出力されるようにしてください。

`>=1.2.1` は「バージョン1.2.1以上」、`=1.2.3` は「バージョン1.2.3に一致」を示します。
:::

## UPM依存性の追加

Unityのレジストリから取る依存（`com.unity.*`）を追加したい場合、オーバーライドを利用できます。

```json
{ "versions": ">=0.35.0 <0.42.0", "merge": { "dependencies": { "com.unity.textmeshpro": "3.0.6" } } }
```

## ほかの場所から取る依存

1つのレシピにソースを複数書くことで、パッケージとそれが依存するパッケージを1つのレシピにまとめられます。

以下は、Vket Cloud SDKをnpmjsから、Vket Cloud SDKが依存するNeedle DeeplinkをOpenUPMから取得する例です（抜粋）。

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
レシピ内に依存先が存在しない場合も、別のレシピに依存先のVPMパッケージが存在するなら、 `package pull` は依存先をALCOMに登録します。
:::
