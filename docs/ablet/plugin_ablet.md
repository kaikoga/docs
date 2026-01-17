---
sidebar_position: 100
---

# Ablet専用プラグイン

Ablet専用プラグインはAbletのみを想定したプラグインです。

AbletはAblet専用プラグインを利用できます。

NDMFはAblet専用プラグインを互換動作で利用できます。

## 制約

AbletとNDMFはプラグインを定義する方法がNDMFと異なります。
このため、NDMFと協調動作する場合、Ablet専用プラグインとNDMF専用プラグインの間で依存性を定義できず、NDMFプラグインとの実行順を厳密に指定できません。

## Ablet on NDMF

`Ablet on NDMF` を有効にすると、NDMFのビルド時にAbletのレイヤーが適用されるようになります。

- Apply on PlayやVRCSDKのビルド時コールバックはNDMFによって起動され、NDMFからAbletが呼び出されます。
- AbletのビルドエラーはNDMFのコンソールに統合されて出力されます。
- Manual BuildはNDMFのメニューから行ってください。
  :::warning[WARNING]
  AbletのManual Applyを行った場合、NDMFプラグインは適用されません。
  :::

