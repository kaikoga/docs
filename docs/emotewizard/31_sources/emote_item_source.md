---
sidebar_position: 0
---

# Emote Item Source

![Inspector](img/emote_item_source.png)

VRChatアバターのExpression Parameterに連動するアニメーションをここに登録します。
Expression ParameterはハンドサインやExpression Menuから変更されるため、ハンドサインやExpression Menuで動く表情や着せ替えを実装できます。

アニメーションの内容は `uc:EmoteSequenceSource` または `uc:GenericEmoteSequenceSource` で設定します。

- `uc:EmoteSequenceSource` は詳細な設定が可能です。
- `uc:GenericEmoteSequenceSource` は作成が簡単です。

:::note[NOTE]
`デフォルトのData Sourceを全て生成` した場合、FX / Gesture / Actionレイヤーを実装するEmote Item Sourceが生成されます。
:::

- `名前`: Emote Itemにわかりやすい名前をつけることができます。
- `優先度`: 同じグループに属する複数のアニメーションが条件を満たした場合、優先度の小さいアニメーションが選択されます。
  グループは `uc:EmoteSequenceSource` または `uc:GenericEmoteSequenceSource` で設定します。
- `条件`: アニメーションを再生する条件を設定します。
- `Emote Sequence`: 再生するアニメーションの内容がここに検出されるか、手動で設定します。
- `Expression Itemを生成`: オンにすると、簡易的なメニュー項目を生成します。
  :::note[NOTE]
  `Expression Itemを生成` は以下の条件を満たす時に利用できます。
  - `条件` が１つ
  - 型が `Auto` または `Int`
  - 演算子が `Equals`
  :::
  - `Expression Itemパス`: メニューアイテムの生成先です。
  - `Expression Itemアイコン`: 生成されるメニューアイテムのアイコンです。

