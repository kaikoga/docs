---
sidebar_position: 1
---

# Extract / Bake

アバターまたは衣装プレハブに存在する揺れものやコンストレイントを別の形式に変換できます。

:::warning[WARNING]
この変換処理は完全ではありません。
VRCPhysBoneから揺れものを変換する際、VRMSpringBoneで表現できない設定は失われます。
また、設定値の変換も完全ではないため、変換後の調整を前提とします。
:::

## 前提条件

選択したGameObjectの子に `Secondary` という名前のGameObjectが追加され、 `Secondary` 以下に変換結果が生成されます。

## 役に立つ状況

VRChat向けアバターをVRMアバターに変換する際、揺れものの設定を１から行いたくない場合に、良い叩き台を提供します。

## 使い方

対象のGameObjectを選択した状態でメニューバー -> `GameObject` -> `Avatar Tinker Vista` を選択するか、ヒエラルキーの対象のGameObjectを右クリックして `Avatar Tinker Vista` を選択してください。

### ATiV Generate系コンポーネントへ変換

#### `Extract VRC PhysBones as ATiV Generate VRM SpringBones`

`vrc:VRCPhysBone`を `ativ:AtivGenerateDynamics` に変換します。

#### `Extract VRC Constraints as ATiV Generate VRM Constraints`

VRC Constraintを `ativ:AtivGenerateConstraint` に変換します。

### ATiV Generate系コンポーネントから変換

:::info[INFO]
NDMFを利用する場合、ATiV Generate系コンポーネントはNDMFのビルドプロセスで対応する実コンポーネントに変換されるため、以下の操作は多くの場合不要です。
:::

#### `Bake ATiVGenerateSpringBones as VRM0 SpringBones`

`ativ:AtivGenerateDynamics` をVRM0のSpringBoneに変換します。

#### `Bake ATiVGenerateSpringBones as ATiV Merge VRM1 SpringBones`

`ativ:AtivGenerateDynamics` を `ativ:AtivMergeVRM1SpringBones` に変換します。

:::warning[WARNING]
`Vrm10SpringBoneJoint` が生成されます。
:::

#### `Bake ATiVGenerateSpringBones into Vrm10Instance SpringBones`

`ativ:AtivGenerateDynamics` をVRM1のSpringBoneに変換します。

:::warning[WARNING]
設定値はアバターの `VRMInstance` に破壊的に書き込まれます。また、 `Vrm10SpringBoneJoint` が生成されます。
:::

#### `Bake ATiVGenerateConstraints as Vrm10Constraints`

[ATiV Generate VRM1 Constraint](../components/ativ_generate_vrm1_constraint.md) をVRM1のConstraintに変換します。
