---
sidebar_position: 10
---

# npmソース

<AiGeneratedBadge />

npmjsやOpenUPMのパッケージをソースとして指定できます。

## 書き方

以下は、OpenUPMのパッケージをそのまま出すシンプルなnpmソースの例です。

```json
{
  "type": "npm",
  "registry": "https://package.openupm.com",
  "packages": [
    { "name": "com.needle.deeplink" }
  ]
}
```

- `type`: npmソースでは `"npm"` です。
- `registry`: npmjsやOpenUPMのレジストリURL（HTTPS）を指定します。
- `packages`: 取得するパッケージを指定します。
- `packages.name` は、ソースに含まれる `package.json` の `name` です。

## npmのパッケージ

npmソースでは、npmでリリースされたバージョンがそのままパッケージのバージョンになります。
