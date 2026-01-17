---
sidebar_position: 1
---

# ATiV Merge VRM1 SpringBones

`univrm1:Vrm10Instance` にSpringBoneを追加登録します。

このコンポーネントで追加するSpringBoneが参照するSpringBone JointやSpringBone Colliderはアバターに追加されている必要があります。

## 役に立つ状況

Modular AvatarでマージするプレハブにVRM1 SpringBoneの追加設定を記録できます。

このコンポーネントはアバターに既にSpringBone JointやSpringBone Colliderが指定されている時に便利です。

## 使い方

アバター内の任意の場所にコンポーネントを追加してください。

このコンポーネントそのものは揺れものとしては機能しません。
`ndmf:NDMF` や `ablet:Ablet` のApply on Playで変換するか、コンテキストメニューからBakeしてください。
