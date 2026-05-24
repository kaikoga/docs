---
sidebar_position: 1
---

# ATiV Generate Dynamics

<PlatformBadge id="UniVRM0" />
<PlatformBadge id="UniVRM1" />
<PlatformBadge id="ChilloutVR" />

揺れものコンポーネントを生成します。

:::info[INFO]
`ativ:AvatarTinkerVista` バージョン2以下ではVRM専用で、 `Ativ Generate VRM0+1 SpringBone` という名前でした。
:::

以下の揺れものをサポートします。

- [VRM0.x SpringBone](#vrm0)
- [VRM1.0 SpringBone](#vrm1)
- [DynamicBone](#db)

## 役に立つ状況

Modular AvatarでマージするプレハブにSpringBoneの追加設定を記録できます。

このコンポーネントはVRChat向けのアバターやアバター衣装をVRM用に再設定する場合に便利です。

また、VRM1.0のSpringBoneJointを簡易的に設定したい時に便利です。

## 使い方

VRMのSpringBoneコンポーネントのようにパラメータを指定してください。

このコンポーネントそのものは揺れものとしては機能しません。
`ndmf:NDMF` や `ablet:Ablet` のApply on Playで変換するか、コンテキストメニューからBakeしてください。

## 生成できる揺れもの

:::tip[TIPS]
`ativ:AtivSelectDynamics` で、出力する揺れもののフォーマットをデフォルトから変更できます。
:::

### VRM0.x SpringBone {#vrm0}

アバターがVRM0.xの場合、デフォルトでVRM0.xのSpringBoneを生成します。

以下のコンポーネントを生成します。

- `univrm0:VRMSpringBone`
- `univrm0:VRMSpringBoneColliderGroup`

### VRM1.0 SpringBone {#vrm1}

アバターがVRM1.0の場合、デフォルトでVRM1.0のSpringBoneを生成します。

`univrm1:Vrm10Instance` にSpringBoneを追加登録します。

更に、以下のコンポーネントを生成します。

- `univrm1:VRM10SpringBoneCollider`
- `univrm1:VRM10SpringBoneColliderGroup`
- `univrm1:VRM10SpringBoneJoint`

既にアバターに `univrm1:VRM10SpringBoneJoint` がついている場合、動作しないことがあります。

### DynamicBone {#db}

以下のコンポーネントを生成します。

- `db:DynamicBone`
- `db:DynamicBoneCollider`
- `db:DynamicBonePlaneCollider`

