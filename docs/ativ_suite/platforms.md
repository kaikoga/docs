---
sidebar_position: 2
---

# 対応プラットフォーム

## VRChat

<PlatformBadge id="VRChat" /><PlatformBadge id="Unity" /><PlatformBadge id="Animator" />

ATiV SuiteでVRChatのアバターを編集できます。

以下のコンポーネントがアバターを指定するマーカーコンポーネントとなります。

- `vrc:VRCAvatarDescriptor` : VRChatアバター

また、以下のサブプラットフォームを持ちます。

- `VRChat PC` : Build TargetがStandalone Windowsの場合
- `VRChat Android` : Build TargetがAndroidの場合
- `VRChat iOS` : Build TargetがiOSの場合

`ndmf:NDMF` または `ablet:Ablet` を利用する場合、非破壊編集が可能です。

:::info[INFO]
<PlatformBadge id="Unity" /> VRChat は **Unityプラットフォーム** です。

**Unityプラットフォーム** ではUnityのコンポーネント情報がそのまま保存されます。
:::

:::info[INFO]
<PlatformBadge id="Animator" /> VRChat は **Animatorプラットフォーム** です。

ATiV Suiteでは、以下の特徴を持ったプラットフォームを **Animatorプラットフォーム** と呼びます。

- UnityのAnimatorを利用してアバターのアニメーションを設定する
- Animatorのパラメータに基づいてアバターのアニメーションを同期する

`ew:EmoteWizard` はVRChatアバターに対してUnityのAnimatorを出力します。
:::

## UniVRM

<PlatformBadge id="UniVRM0" />
<PlatformBadge id="UniVRM1" />

ATiV SuiteでUniVRMのVRM0.xおよびVRM1.0アバターを編集できます。

以下のコンポーネントがアバターを指定するマーカーコンポーネントとなります。

- `univrm0:VRMMeta`: VRM0.xアバター
- `univrm1:Vrm10Instance`: VRM1.0アバター

`ablet:Ablet` を利用する場合、非破壊編集が可能です。

また、 Avatar Tinker Vista は `ndmf:NDMF` の UniVRM 対応を追加します。

:::info[INFO]
VRM0.x および VRM1.0 は出力先が VRM ファイルなので、 **Unityプラットフォーム** ではありません。
:::

:::info[INFO]
VRM0.x および VRM1.0 は AnimatorController を使わないため、 **Animatorプラットフォーム** ではありません。
:::

## プラットフォーム拡張

`ablet:Ablet` を利用する場合、 `ativ:AvatarTinkerVistaExtension` は追加のプラットフォーム対応を提供します。
