---
sidebar_position: 1
---

# ATiV Delete All VRC PhysBones

VRC PhysBoneを全て削除します。

## 前提条件

アバターに含まれる `uc:VRCPhysBone` と `uc:VRCPhysBoneCollider` を全て削除したいときに使います。

## 役に立つ状況

簡易的にQuest対応を行いたいけど、VRC PhysBoneの調整が面倒な際に便利です。

また、アバターのVRC PhysBoneを `uc:AtivGenerateDynamics` に変換した際、元の `uc:VRCPhysBone` コンポーネントを削除する代わりに `uc:AtivDeleteAllVRCPhysBones` を利用できます。

:::tip[TIPS]
[`uc:AtivReduceDynamics`](ativ_reduce_vrc_physbones.md) はおおむねこのコンポーネントより高機能ですが、実行されるNDMFフェーズが異なります。

- `uc:AtivDeleteAllVRCPhysBones` はResolvingフェーズ
- `uc:AtivReduceDynamics` はTransformingフェーズ
:::

## 使い方

アバター内の任意の場所にコンポーネントを追加してください。
