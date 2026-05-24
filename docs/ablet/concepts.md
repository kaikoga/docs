---
sidebar_position: 500
---

# 概念

:::note[NOTE]
このページの内容はAbletの動作原理をよく知るためのものです。
Abletプラグインを普通に利用する限りはおそらく読む必要はありません。
:::

## 概要

- Abletは現在存在が認知されているサービス提供中のソーシャルVRプラットフォームで使用されるUnityのうち最も古いLTSバージョンと最も新しいバージョンをサポートします。
  - 現在の想定最低バージョンは `2021.3` です。
  - 現在の想定最高バージョンは `6000.4` です。
  - しかし、十分にテストされていないかもしれません。
  - 一部のパッケージマネージャとの互換性のため、パッケージの依存Unityバージョンとして `2019.4` が指定されている場合がありますが、 `2019.4` はサポートしません。 
- Abletはアバター改変に利用可能ですが、アバターを前提としません。
- AbletはUnity組み込みのライブラリ以外の特定のサードパーティライブラリに依存しません。
  - ライブラリが必要な場合、ATiV Suiteの一部として提供されます。

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
