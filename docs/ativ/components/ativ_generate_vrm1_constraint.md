---
sidebar_position: 1
---

# ATiV Generate VRM1 Constraint

アバターがVRM1向けであれば、Constraintを生成します。

## 役に立つ状況

VRM1のConstraintコンポーネントとは異なり、ついているGameObject（Secondaryなど）とは別の制御対象を指定する使い方をサポートします。

言い換えると、 `ativ:AtivGenerateConstraint` の設定はSecondary以下にまとめることができます。

## 使い方

VRM1のConstraintコンポーネントのようにパラメータを指定してください。

このコンポーネントそのものはコンストレイントとしては機能しません。
`ndmf:NDMF` や `ablet:Ablet` のApply on Playで変換するか、コンテキストメニューからBakeしてください。
