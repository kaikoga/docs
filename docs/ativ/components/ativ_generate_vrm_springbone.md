---
sidebar_position: 1
---

# ATiV Generate VRM0+1 SpringBone

アバターがVRM0向けであれば、 `univrm0:VRMSpringBone` を生成します。

アバターがVRM1向けであれば、 `univrm1:Vrm10Instance` にSpringBoneを追加登録します。

このコンポーネントはSpringBone JointやSpringBone Colliderを必要に応じて生成します。
既にアバターにSpringBone Jointがついている場合、動作しないことがあります。

## 役に立つ状況

Modular AvatarでマージするプレハブにSpringBoneの追加設定を記録できます。

このコンポーネントはVRChat向けのアバターやアバター衣装をVRM用に再設定する場合に便利です。

## 使い方

VRMのSpringBoneコンポーネントのようにパラメータを指定してください。

このコンポーネントそのものは揺れものとしては機能しません。
`ndmf:NDMF` や `ablet:Ablet` のApply on Playで変換するか、コンテキストメニューからBakeしてください。
