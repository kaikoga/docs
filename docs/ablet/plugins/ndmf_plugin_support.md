---
sidebar_position: 1
---

# NDMF専用プラグイン

NDMF専用プラグインは `ndmf:NDMF` のみを想定したプラグインです。

`ndmf:NDMF` はNDMF専用プラグインを利用できます。

`ablet:Ablet` はNDMF専用プラグインを互換動作で適用できます。

いずれの場合も、プラグインはNDMFに依存するため、NDMFをプロジェクトに追加する必要があります。\
（NDMF専用プラグインをAbletで利用する場合、AbletとNDMFが両方必要です。）

## 制約

AbletがNDMF専用プラグインと協調動作する場合はNDMFに依存します。
このため、NDMF専用プラグインをAbletから利用する場合も **Unity 2022** 以上と **NDMFが依存するDLL** が必要になります。

:::note[NOTE]
`vrc:VRCSDK` を利用しない場合、問題になるかもしれません。
:::
