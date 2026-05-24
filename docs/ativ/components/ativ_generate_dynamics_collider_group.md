---
sidebar_position: 1
---

# ATiV Generate Dynamics Collider Group

<PlatformBadge id="UniVRM0" />
<PlatformBadge id="UniVRM1" />
<PlatformBadge id="ChilloutVR" />

`ativ:AtivGenerateDynamics` が参照するCollider Groupを設定できます。 

:::info[INFO]
`ativ:AvatarTinkerVista` バージョン2以下ではVRM専用で、 `Ativ Generate VRM0+1 SpringBone Collider Group` という名前でした。
:::

:::tip[TIPS]
`ativ:AtivSelectDynamics` で、出力する揺れもののフォーマットをデフォルトから変更できます。
:::

## 使い方

VRMのSpringBone Collider Groupコンポーネントのようにパラメータを指定してください。

このコンポーネントそのものは揺れものとしては機能しません。
`ndmf:NDMF` や `ablet:Ablet` のApply on Playで変換するか、コンテキストメニューからBakeしてください。
