---
sidebar_position: 200
---

# 概念

:::note[NOTE]
このページの内容はAbletの動作原理をよく知るためのものです。
Abletプラグインを普通に利用する限りはおそらく読む必要はありません。
:::

## Abletレイヤー

Abletのプロシージャル編集処理はAbletレイヤーと呼ばれる単位で管理されています。

AbletプラグインはAbletに１つ以上のAbletレイヤーを追加します。

### Abletレイヤーの適用

Abletレイヤーは以下のタイミングで適用されます。

#### Apply on Play
  
全てのAbletレイヤーが適用されます。

#### Manual Apply

全てのAbletレイヤーが適用されます。

#### Enhance Inplace Preview

Inplace Previewに対応している一部のAbletレイヤーが適用されます。

:::tip[TIPS]
具体的には、レイヤーに `IInplacePreviewSupportExtension` を定義した上で、 `context.Argument.PreviewMode` が `InplacePreview` の場合に `IInplacePreviewSupportExtension.ToProcedure()` が `AbletObservableProcedure` を返す必要があります。
:::
