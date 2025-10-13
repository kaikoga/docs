---
sidebar_position: 1
---

# これはなに？

kaikogaが作ったいろんなツールのドキュメント置き場です。

（ツールが増えすぎた上、複数を組み合わせて使うことが前提っぽくなってきているので、１つの場所にまとめることにしました。）

# 入手方法

## VPMパッケージをインストール

ツールのVPMパッケージを [ALCOM](https://vrc-get.anatawa12.com/ja/alcom/) でインストールすることができます。
VRChatユーザー以外の方も利用できます。

<a href="vcc://vpm/addRepo?url=https%3A%2F%2Fvpm.kaikoga.net%2Findex.json">ALCOMまたはVCCにvpm.kaikoga.netを追加する</a>

ALCOMでインストールする場合、必須の依存ライブラリが自動的にインストールされるほか、ALCOMからアップデートを適用できます。

:::info[INFO]
VRCSDKやUniVRM、NDMFなどは任意の依存ライブラリとして定義されています。
必要な方は別途インストールが必要です。
:::

VPM置き場： https://vpm.kaikoga.net/

VPMリポジトリURL（コマンドライン・互換ツール用）： https://vpm.kaikoga.net/index.json

:::info[INFO]
VRChatユーザーはVRChat Creator Companionを使うこともできます。
:::

## UniVRMをインストール（オプション）

UniVRMと連携するツールは、 `Assets` ではなく `Packages` フォルダにUniVRMをインストールすることが推奨されます。

そのためには、UPM gitパッケージとしてUniVRMをインストールしてください。

以下のURLを、いずれかの方法で追加してください。
 
- メニューバー → `Window` → `Package Manager` からPackage Managerを開き、左上の「＋」メニューから `Add package from git URL...` してください。
  - https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.130.1
  - https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.130.1
  - https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM10#v0.130.1
- または、 `Packages/manifest.json` の `dependencies` 以下に追記してください。

```
    "com.vrmc.gltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.130.1",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.130.1",
    "com.vrmc.vrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM10#v0.130.1",
```

[//]: # (編集時の注意：enもある)
[//]: # (編集時の注意：ここを更新したらチュートリアルも更新すること)

## 質問コーナー

- Q. KogapenやKogastatsのドキュメントは？
  - A. ちょっと待って・・・
- Q. MeshWeaverのドキュメントは？
  - A. ジャンルが違うので、 https://kaikoga.github.io/MeshWeaver-unity/docs/ja/ を見てください。 
