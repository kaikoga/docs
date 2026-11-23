---
sidebar_position: 21
---

# その他の書き方

<AiGeneratedBadge />

## tagでパッケージのバージョンを上書きする

GitHubソースで、複数のリリースで `package.json` の `version` が同じ場合、パッケージのバージョンを区別できません。

`versionFromTag` を `true` にした場合、 `package.json` の `version` にリリースのバージョンを上書きします。
結果として、tagごとのバージョンがtagに基づくバージョン名で読み込まれます。

`versionFromTag` を `{ "tags": "<範囲>" }` にした場合、代わりに [範囲](ranges.md) 内のリリースのみ適用されます。

```json
{ "name": "app.warudo.modtool", "versionFromTag": true }
```

## ディレクトリ構造への追従

GitHubソースで、リリース間でパッケージが `Assets/` から `Packages/` へ移動した場合、 `path` の代わりに `paths` を使って、以下のように書きます。

```json
"paths": [
  { "tags": "<0.131.0", "path": "Assets/VRM" },
  { "tags": ">=0.131.0", "path": "Packages/VRM" }
]
```

- [範囲](ranges.md) どうしは重なってはいけません。
- どの範囲にも入らないリリースでは、そのパッケージのバージョンは存在しないとして扱われます。

## 古い依存性

パッケージを指定しない `package pull` では、全ての最新パッケージを pull します。
`onDemand` に `true` を指定した場合、そのパッケージはデフォルトの `pull` の対象から外れます。

```json
{ "name": "com.vrmc.unigltf", "onDemand": true }
```

パッケージの古いバージョンの依存性を定義する際に使います。

