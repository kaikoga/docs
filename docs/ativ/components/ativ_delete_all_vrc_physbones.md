---
sidebar_position: 1
---

# ATiV Delete All VRC PhysBones

:::note[NOTE]
このコンポーネントは `ndmf:NDMF` または `ablet:Ablet` を通してのみ機能します。
:::

VRC PhysBoneを全て削除します。

## 前提条件

アバターに含まれる `vrc:VRCPhysBone` と `vrc:VRCPhysBoneCollider` を全て削除したいときに使います。

## 役に立つ状況

簡易的にQuest対応を行いたいけど、VRC PhysBoneの調整が面倒な際に便利です。

また、アバターのVRC PhysBoneを `ativ:AtivGenerateDynamics` に変換した際、元の `vrc:VRCPhysBone` コンポーネントを削除する代わりに `ativ:AtivDeleteAllVRCPhysBones` を利用できます。

:::tip[TIPS]
[`ativ:AtivReduceDynamics`](ativ_reduce_vrc_physbones.md) はおおむねこのコンポーネントより高機能ですが、実行されるNDMFフェーズが異なります。

- `ativ:AtivDeleteAllVRCPhysBones` はResolvingフェーズ
- `ativ:AtivReduceDynamics` はTransformingフェーズ
:::

## 使い方

アバター内の任意の場所にコンポーネントを追加してください。
