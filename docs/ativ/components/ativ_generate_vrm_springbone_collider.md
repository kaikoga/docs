---
sidebar_position: 1
---

# ATiV Generate VRM0+1 SpringBone Collider

`ativ:AtivGenerateDynamicsColliderGroup` にコライダーを追加します。

## 役に立つ状況

VRM1のConstraintコンポーネントとは異なり、ついているGameObjectとは別の対象にコライダーを追加する使い方をサポートします。

言い換えると、ATiV Generate VRM0+1 SpringBone Colliderの設定はSecondary以下にまとめることができます。

## 使い方

VRMのSpringBone Colliderコンポーネントのようにパラメータを指定してください。

このコンポーネントそのものは揺れものとしては機能しません。
`ndmf:NDMF` や `ablet:Ablet` のApply on Playで変換するか、コンテキストメニューからBakeしてください。
