---
sidebar_position: 0
---

# Ablet専用プラグイン

Ablet専用プラグインは `ablet:Ablet` のみを想定したプラグインです。

`ablet:Ablet` はAblet専用プラグインを利用できます。

`ndmf:NDMF` はAblet専用プラグインを互換動作で利用できます。

いずれの場合も、プラグインはAbletに依存するため、Abletをプロジェクトに追加する必要があります。\
（Ablet専用プラグインをNDMFで利用する場合、AbletとNDMFが両方必要です。）

## 制約

AbletとNDMFはプラグインを定義する方法がNDMFと異なります。
このため、NDMFと協調動作する場合、Ablet専用プラグインとNDMF専用プラグインの間で依存性を定義できず、NDMFプラグインとの実行順を厳密に指定できません。
