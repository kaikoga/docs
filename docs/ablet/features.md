---
sidebar_position: 1
---

# 主な機能

## Apply on Play

プレイモードに遷移した際、アクティブな適用対象に対してAbletの編集を自動的に適用します。

:::tip[TIPS]
NDMFのApply on Playとは以下の点が異なります。

- プレイモードに遷移したタイミングで非アクティブな適用対象に対してはApply on Playは適用されません。
- アバタープラットフォームの変換は行われません。
  :::

### Manual Apply

手動でAbletの編集を適用します。

## Apply on Platform Build

プラットフォーム向けにアバターをビルドする際、ビルド対象に対してAbletの編集を自動的に適用します。

## Inplace Preview

Abletプラグインは、特定のアニメーションなどを適用した結果を確認する機能を持つことがあります。
これをInplace Previewと呼びます。

:::tip[TIPS]
NDMFのプレビューとはかなり異なる概念です。
NDMFのプレビューはアバターをビルドした時の見た目をリアルタイムに再現する機能ですが、AbletのInplace Previewは特定の状態に置かれたアバターをその場で確認する機能であり、リアルタイムではありません。
:::

### Enhance Inplace Preview

Enhance Inplace Previewが有効の場合、一部のAbletの編集が適用された見た目を確認できます。

- Inplace Previewを行っている間
- Inplace Previewを行っていないが、アバターを選択している間

:::tip[TIPS]
Enhance Inplace Previewを常時有効にするのではなく、必要に応じてオン・オフを切り替える使い方を想定しています。
:::

:::tip[TIPS]
Inplace PreviewまたはEnhance Inplace Previewのいずれかが動作中はNDMFのプレビューは表示されません。
:::
