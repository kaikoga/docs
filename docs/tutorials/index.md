---
sidebar_position: 1
---

# アバター出力チュートリアル

現在は厳選されたチュートリアルのみが存在しますが、読み方次第で多くのユースケースに適用可能です。

## 読み方ガイド

### VRChat PCアバターを出力したい

- Poor以上を目指したい
  - → チュートリアルは未整備ですが、 [チュートリアル＋：VRM1 cluster](tutorial_vrm1_cluster.md) にメッシュ削減などの情報があります。

### VRChat Mobileアバターを出力したい

:::info[INFO]
いわゆるQuest対応のことです。
:::

- VeryPoorでよい
  - → [チュートリアル：VRChat Mobile](tutorial_quest.md) に従ってください。
- Poor以上を目指したい
  - → [チュートリアル：VRChat Mobile](tutorial_quest.md) に従ってください。
  - → 一般的にQuest Poorの達成は難易度が高いですが、 [チュートリアル＋：VRM1 cluster](tutorial_vrm1_cluster.md) にメッシュ削減などの情報があります。

### VRM0.xアバターを出力したい

:::info[INFO]
Avatar Tinker Vista はVRM0.xアバターとVRM1.0アバターを同様に扱うことができます。

**VRM1.0アバターを出力したい** の対応する項目を参照してください。
:::

### VRM1.0アバターを出力したい

:::warning[WARNING]
VRCSDKを使わない方法もありますが、一般的な手法ではないので、不具合やプラグインの相性問題が多く発生することが予想されます。

VRCSDKを既に利用している人は、おそらくVRCSDKを使った方が簡単です。
:::
- BOOTHのVRChat想定アバターを扱いたい
  - → [チュートリアル：VRM1](tutorial_vrm1.md) に従ってください。
- BOOTHのVRChat想定アバターを扱わず、VRCSDKを使ったことがない
  - → [チュートリアル：VRM1 No VRCSDK](advanced/tutorial_novrc_vrm1.md) にVRCSDKを使わずにNDMFを利用するための情報があります。

### VRM1.0アバターを出力して、clusterで使いたい

- BOOTHのVRChat想定アバターを扱いたい
  - → [チュートリアル：VRM1](tutorial_vrm1.md) に従ったのち、 [チュートリアル＋：VRM1 cluster](tutorial_vrm1_cluster.md) に従ってください。
- BOOTHのVRChat想定アバターを扱わず、VRCSDKを使ったことがない
  - → [チュートリアル：VRM1 No VRCSDK](advanced/tutorial_novrc_vrm1.md) にVRCSDKを使わずにNDMFを利用するための情報があります。
  - → cluster VRM1.0の制限に適合するには、 [チュートリアル＋：VRM1 cluster](tutorial_vrm1_cluster.md) も参考にしてください。

### それ以外のプラットフォームに出力したい

- → [チュートリアル：VRM1 No VRCSDK](advanced/tutorial_novrc_vrm1.md) に従ってください。
  - というよりは、 [2024-12-08 他のアプリケーションでModular Avatarを動かす方法 | Haï~](https://docs.hai-vr.dev/docs/research/other/modular-avatar-on-other-apps-ja) をよく読んでください。
  - 一般的な手法ではないので、多くの困難が予想されます。
