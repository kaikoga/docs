---
sidebar_position: 1
---

# レシピを書く

<AiGeneratedBadge />

レシピは、パッケージを「どこから取り、どう直してVPMのパッケージにするか」を書いたJSONのファイルです。
Vpmifyはレシピを読んでパッケージのバージョン一覧を作り、利用者が指定したバージョンについて、元のパッケージをVPMに変換した上でALCOMに登録します。

[//]: # (編集時の注意：レシピの完全なスキーマは Vpmify のリポジトリが正。リポジトリを公開したら、スキーマのドキュメントへのリンクを足す)

## レシピの例

以下は、OpenUPMのパッケージをそのままVPMとして出力するシンプルなレシピの例です。

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

- `vpmifyFormat`: レシピ自体のフォーマットです。 `1` です。
- `url`: （任意）レシピの配布元のURLです。
- `id`: レシピの識別子です。
  VPMのリポジトリのidと同じく、逆ドメイン名記法で書きます。
  使える文字は英小文字・数字・`.`・`_`・`-` です。
- `displayName`: レシピの名前です。
- `sources`: パッケージの取得元の定義です。
  - `"type"` が `"npm"` の場合、 [npmソース](npm.md) です。
  - `"type"` が `"github"` の場合、 [GitHubソース](github.md) です。

## レシピを試す

```sh
vpmify recipe add ./my-recipe.json
vpmify recipe versions --all com.example.needle-deeplink
vpmify package pull com.example.needle-deeplink
```

- `recipe add` で、レシピを取り込みます。
- `recipe versions --all` で、レシピに含まれるバージョンを表示します。
- `package pull` で、レシピに含まれるパッケージの最新版をALCOMに登録します。
  バージョンを指定する際は、例えば `package pull com.example.needle-deeplink@1.2.3` のように書きます。

ローカルのレシピの修正をVpmifyで読み直す場合は、もう一度上記の手順を行ってください。

## レシピを配る

レシピをWebに置くことで、他の人にレシピを公開できます。
`vpmify://recipe/add?url=<レシピの https の URL>` の形のリンクから、GUI に取り込めます。
