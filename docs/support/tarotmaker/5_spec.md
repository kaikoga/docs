---
sidebar_position: 20
---

# 内部仕様

:::info[INFO]
Modular Avatarを使用して組み込む場合、以下の内部実装はModular Avatarによって自動的に取り扱われるため、気にする必要がありません。
:::

## Modular Avatarを使用せずに組み込む場合

**Tarot Makerはアバターに設定済みのFXレイヤー、Expressions Menu、Expression Parameterを改変して、設定を追加します。**

これらの設定を管理する他のアセットと併用する場合は気をつけてください。

**Tarot Makerの管理対象は名前で識別されます。**

以下のオブジェクトはTarot Makerによって管理されるため、「組み込み」ボタンを押すことによって更新されます。

- FXレイヤーに含まれる、 `Tarot_` で始まる名前のAnimator Controllerレイヤー
- `Tarot_` で始まる名前のExpression Parameter
- `Tarot` という名前のExpressions Menuコントロール
- アバター直下に配置される `Tarot_Container` という名前のGameObject

このような名前がついた既存のオブジェクトは「組み込み」によって削除されるため気をつけてください。
