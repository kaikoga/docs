---
sidebar_position: 1
---

# ATiV Generate Dynamics Collider

<PlatformBadge id="UniVRM0" />
<PlatformBadge id="UniVRM1" />
<PlatformBadge id="ChilloutVR" />

`ativ:AtivGenerateDynamicsColliderGroup` にコライダーを追加します。

:::info[INFO]
`ativ:AvatarTinkerVista` バージョン2以下ではVRM専用で、 `Ativ Generate VRM0+1 SpringBone Collider` という名前でした。
:::

:::tip[TIPS]
`ativ:AtivSelectDynamics` で、出力する揺れもののフォーマットをデフォルトから変更できます。
:::

## 役に立つ状況

VRM1のConstraintコンポーネントとは異なり、ついているGameObjectとは別の対象にコライダーを追加する使い方をサポートします。

言い換えると、ATiV Generate VRM0+1 SpringBone Colliderの設定はSecondary以下にまとめることができます。

## 使い方

VRMのSpringBone Colliderコンポーネントのようにパラメータを指定してください。

このコンポーネントそのものは揺れものとしては機能しません。
`ndmf:NDMF` や `ablet:Ablet` のApply on Playで変換するか、コンテキストメニューからBakeしてください。
