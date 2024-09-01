---
sidebar_position: 1
---

# ATiV AAO Merge Other Skinned Mesh

:::info[INFO]
[AAO Trace And Optimize](https://vpm.anatawa12.com/avatar-optimizer/en/docs/reference/trace-and-optimize/) に Merge Skinned Meshes 機能が追加されたので、ほとんどのユースケースでこのコンポーネントは不要です。
:::

:::danger[DANGER]
本コンポーネントはレガシー機能です。
:::

Merge Skinned Meshに指定されていない全てのメッシュを含むMerge Skinned Meshを作成します。

稀に見た目に影響が出るおそれがあるためAAO本家に取り込まれることはありませんが、たいていの場合だいたい動くのでここに置きました。

:::warning[WARNING]
本コンポーネントはAAOの非公開の機能を利用しているため、AAOのバージョンアップで動かなくなるかもしれません。

本コンポーネントは設定済みのMerge Skinned Meshに置き換わるだけなので、もし動かなくなっていたらTrace And Optimizeを設定するか、Merge Skinned Meshを手動で設定して差し替えてください。
:::

## 前提条件

AAO: Avatar Optimizerを利用している。

## 役に立つ状況

衣装のメッシュを素体（身体）のメッシュに自動的に統合したい場合に便利です。

## 使い方

`AAO Merge Skinned Mesh` を追加する感じで追加してください。
