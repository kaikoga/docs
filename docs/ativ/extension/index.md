---
sidebar_position: 9000
---

# Avatar Tinker Vista - Extension

将来的に本体に取り込まれることを前提とした ATiV / Ablet の実験的な拡張です。

これだけでは動かない可能性が高いです（動作確認もしていません）が、とりあえず置いておきます。

## プラットフォーム拡張

Avatar Tinker Vista - Extension はAbletにプラットフォームを追加します。

:::info[INFO]
Avatar Tinker Vista - Extension で追加されるプラットフォームは `ndmf:NDMF` には追加されません。

NDMFがサポートされている環境でNDMFプラグインを利用する場合は、Abletを起点としてビルドするために `NDMF on Ablet` が必要です。
:::

### ChilloutVR Support

<PlatformBadge id="ChilloutVR" /><PlatformBadge id="Unity" /><PlatformBadge id="Animator" />

Ablet / Avatar Tinker VistaがChilloutVRのアバターを認識するようになります。

以下のコンポーネントがアバターを指定するマーカーコンポーネントとなります。

- `cvr:CVRAvatar`: ChilloutVRアバター

ChilloutVRプラットフォームでは、サブプラットフォームは未実装です。

:::info[INFO]
ChilloutVRは **Animatorプラットフォーム** です。

`ew:EmoteWizard` はChilloutVR Supportと連携して動作し、UnityのAnimatorを出力します。
:::

:::tip[TIPS]
ChilloutVRアバターの揺れものを設定するには、以下のいずれかの方法を利用してください。

- `ativ:AtivSelectDynamics` から `db:DynamicBone` を出力する（DynamicBoneがプロジェクトにインポートされている場合、デフォルトの揺れものになります）
- `db:DynamicBone` コンポーネントを設定する
- `mc2:MagicaCloth2` コンポーネントを設定する
:::

### Denormalized Avatar Exporter Support

<PlatformBadge id="DAE" />

Ablet / Avatar Tinker Vistaが[Denormalized Avatar Exporter](https://docs.hai-vr.dev/docs/products/denormalized-avatar-exporter)をアバタープラットフォームとして認識するようになります。

VSFAvatarやWarudo Character Modが書き出せる可能性があります（動作保証はしていません）。バージョン相性などで動かない場合もあります。

以下のコンポーネントがアバターを指定するマーカーコンポーネントとなります。

- `dae:DenormalizedAvatarExporter`: Denormalized Avatar Exporterアバター

Denormalized Avatar Exporterプラットフォームでは、サブプラットフォームは未実装です。

:::info[INFO]
実際にアバターがどのプラットフォームにエクスポートされるかは、Denormalized Avatar Exporterの挙動に依存します。
:::

:::info[INFO]
Unityのバージョンが2022未満の場合、AbletのNDMF連携は利用できません。（NDMFが動かないので）
:::

### Basis Support

<PlatformBadge id="Basis" /><PlatformBadge id="Unity" />

Ablet / Avatar Tinker VistaがBasis SDKをアバタープラットフォームとして認識するようになります。

:::warning[WARNING]
現在、Basisアバターの動作確認が取れる環境が整っていないため、動作確認が取れていません。
:::

以下のコンポーネントがアバターを指定するマーカーコンポーネントとなります。

- `basis:BasisAvatar`: Basisアバター

:::note[NOTE]
ご存知の通り、Basisはプラットフォームではありませんが、AbletがBasis SDKを（UniVRMやDenormalized Avatar Exporterのように）アバタープラットフォームとして扱うということです。
:::

Basisプラットフォームでは、サブプラットフォームは未実装です。

:::note[NOTE]
Basisで実装された具体的なプラットフォームがAbletのサブプラットフォームとして定義されることが期待されています。
:::

:::info[INFO]
（意外にも？）Basisは（現在は） **Animatorプラットフォーム** ではありません。

Basisアバターに対して、 `ew:EmoteWizard` はUnityのAnimatorを出力しません。
:::

:::tip[TIPS]
現時点で、ATiV SuiteはBasisアバターの揺れもの設定をサポートしません。

しかし、 `basis:JiggleRig` を設定することはおそらく可能です。（テストはされていません）
:::

## サブプラットフォーム拡張

Avatar Tinker Vista - Extension はAbletにサブプラットフォームを追加します。

:::info[INFO]
サブプラットフォームは `ndmf:NDMF` に存在しない概念です。

NDMFビルドが可能な場合がありますが、NDMFプラグインを利用する場合は `NDMF on Ablet` をお勧めします。
:::

### UniVRM Support Extension

以下のサブプラットフォームは `univrm0:VRMMeta` および `univrm1:Vrm10Instance` のマーカーコンポーネントから利用できます。

#### cluster VRM0 / VRM1 Subplatform

以下は、UniVRM 0.x/1.0アバターのclusterへの書き出しを想定したサブプラットフォームです。

- `UniVRM VRM0.x cluster`
- `UniVRM VRM1.0 cluster`

現時点では、これらは機能のないマーカーサブプラットフォームです。\
`ativ:AtivTargetAbletSubplatform` の条件を設定した上で `ablet:AbletSelectSubplatform` でビルドを切り替えできます。

:::tip[TIPS]
clusterサブプラットフォームは機能を持たないため、使わなくても問題はありません。

素直にPrefab Override等で対応する方が簡単です。
:::
