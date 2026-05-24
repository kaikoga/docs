---
sidebar_position: 2
---

# ウィンドウ

## Ablet Settings Window

メニューバーから `Tools` → `Ablet` → `Ablet Settings Window` で、Abletの設定ウィンドウが表示されます。

### 一括設定

NDMFの存在する環境では、`Ablet 優先設定` および `NDMF 優先設定` ボタンをクリックすることで、設定のプリセットを適用します。

`Ablet 優先設定` はAbletからビルドを行う際に適した設定です。
**Abletプラグインのみ利用する場合、またはAbletプラグインをメインで利用しているプロジェクトにNDMF専用プラグインを追加したい場合に推奨される設定です。**

:::note[NOTE]
**Abletプラグインのみ利用する場合** とは、例えばUnity 2021で非破壊改変を行いたい時です。
:::

`NDMF 優先設定` はNDMFからビルドを行う際に適した設定です。
**NDMFプラグインのみ利用する場合、またはNDMFプラグインをメインで利用しているプロジェクトにAblet専用プラグインを追加したい場合に推奨される設定です。**

:::note[NOTE]
**NDMFプラグインのみ利用する場合** とは、例えば `ew:EmoteWizard` をNDMFプラグインとして利用する時です。
:::

## Ablet Prefer NDMF

`Ablet Prefer NDMF` をオンにした場合、AbletのUIがNDMFプロジェクト用に最適化されます。

Abletからビルドを行うための機能は非表示になります。

:::info[INFO]
`NDMF 優先設定` を適用した場合、 `Ablet Prefer NDMF` はオンになります。
:::

:::info[INFO]
`Prefer Ablet` とは異なる機能です。
:::

## Ablet Console Window

メニューバーから `Tools` → `Ablet` → `Ablet Console Window` で、Abletのコンソールウィンドウが表示されます。

### Auto Open Console Window

`Auto Open Console Window` をオンにした場合、Abletのコンソールウィンドウに出力があった場合に自動的に表示されます。
