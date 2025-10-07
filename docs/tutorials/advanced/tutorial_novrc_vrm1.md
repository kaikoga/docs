---
sidebar_position: 101
---

# チュートリアル：VRM1 No VRCSDK

`Chillaxins` を利用して、VRCSDKのない環境でNDMFワークフローを利用してアバターカメラアプリ向けのVRM1.0アバターを構築するチュートリアルです。

:::warning[WARNING]
本チュートリアルは上級者向けです。

VRCSDKをインストールできる環境ではVRCSDKをインストールした方が簡単でトラブルが少ないです。
:::

## 前提条件

以下の事項に関して、基本的な知識を持っている人が対象です。

- Unityの操作
- UniVRM（もしくは、任意のアバタープラットフォーム）を使ったアバターのセットアップ

### VRChat想定アバターの扱い方

VRChat想定でセットアップ済みのアバターアセットを取り扱う場合、一般的には、VRCSDKをインストールした環境で扱う方が（VRCSDKのコンポーネントから値を取り出せるため）簡単です。
UniVRMや`Modular Avatar Resonite`を利用する場合、VRCSDKをインストールした方が良いです。

ChilloutVRやBasisなどの環境では、VRCSDKと共存できないSDKを利用する必要があります。
この場合、VRCSDKをインストールしたUnityプロジェクトと対象のプラットフォームのSDKをインストールしたUnityプロジェクトの２つを作成して、おそらく設定の目コピーを行うことになるでしょう。

本チュートリアルでは、VRChat向けにセットアップされた衣装アセットのVRChat特有の設定を無視してFBXから直接セットアップすることを想定します。

## Unityのインストール

本チュートリアルではVRCSDKを使わないので、UniVRMが対応している任意のバージョンのUnityを使用できます。

・・・が、現在のAvatar Tinker VistaはUnity 2022未満では動作確認が不十分なので、うまく動かないかもしれません。
ほかに理由がない限り、Unityは2022以上のバージョンを使用することを推奨します。

## ライブラリのインストール

本チュートリアルではUnityプロジェクトを新規にセットアップします。

Unity Hubから新しい `3D(Built-In Render Pipeline)` プロジェクトを作成してください。

:::info[INFO]
特に明記されていない場合、ライブラリは最新版をインストールするようにしてください。
:::

### ALCOMのインストール

本チュートリアルではVPMパッケージとしてインストールできるもの（つまり、UniVRM以外全部）はVPMでインストールします。

VRCSDKのない環境なので、VCCは利用できません。
`ALCOM` を使ってください。

先ほどUnity Hubから作成したプロジェクトを `ALCOM` に認識させます。

`Create New Project` 右のドロップダウンメニューから `Add Existing Project` を選び、先ほど作成したプロジェクトを選択してください。

以下、 VPM Repo: の記述がある場合、 `ALCOM` の `Resources` タブから `Add Repository` を選択することで、 `ALCOM` からVPMパッケージを追加できるようになります。

:::info[INFO]
おそらく `ALCOM` の表示はあなたのシステムの言語に合わせて翻訳されているはずです。
読み替えてください。
:::

### NDMF、Chillaxinsのインストール

VRCSDKのない環境なので、 `Chillaxins` に含まれる依存ライブラリを利用してNDMFを動かします。

ref: [2024-12-08 他のアプリケーションでModular Avatarを動かす方法 | Haï~](https://docs.hai-vr.dev/docs/research/other/modular-avatar-on-other-apps-ja)

**Non-Destructive Modular Framework (NDMF)**\
Docs: https://modular-avatar.nadena.dev/ja/ \
VPM Repo: https://vpm.nadena.dev/vpm.json \
アバターを非破壊改変するツールを連携して動作させるために使います。

**Chillaxins**\
Docs: https://docs.hai-vr.dev/docs/products/chillaxins \
VPM Repo: https://hai-vr.github.io/vpm-listing/index.json \
VRCSDKのない環境でNDMFを動作させるために必要です。

### vpm.kaikoga.netのインストール

VPM Repo: https://vpm.kaikoga.net/index.json

いっぱいインストールします。

**Emote Wizard**\
VRMアバターの表情とリップシンクの設定を行います。

**Avatar Tinker Vista**\
VRMのメタデータを設定します。

**Avatar Tinker Vista - ApplyOnPlayHack**\
NDMFのApply On PlayでVRMアバターをVRMアバターとしてビルドできるようにします。

**QuestReplacer**\
VRM1.0で使うMToon10マテリアルの生成と、ビルド時のマテリアル差し替えを行います。

### UniVRMのインストール

Avatar Tinker VistaのVRM1.0出力はUniVRMを利用するため、UniVRMをインストールしてください。

**UniVRM**\
Docs: https://vrm.dev/ \
GitHub Releases: https://github.com/vrm-c/UniVRM/releases \
UnityでVRMアバターを取り扱うために使います。

:::warning[WARNING]
多くの外部NDMFプラグインは、unitypackageでインストールされたUniVRMを無視します。
このため、UniVRMはUPMでインストールすることが推奨されます。

具体的には、以下のURLをいずれかの方法で追加してください。

- メニューバー → `Window` → `Package Manager` からPackage Managerを開き、左上の「＋」メニューから `Add package from git URL...` してください。
  - https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.129.3
  - https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.129.3
  - https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM10#v0.129.3
- または、 `Packages/manifest.json` の `dependencies` 以下に追記してください。

```
    "com.vrmc.gltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.129.3",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.129.3",
    "com.vrmc.vrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM10#v0.129.3",
```

:::

:::tip[TIPS]
VRM以外のプラットフォームをターゲットする人は、読み替えてください。
:::

### 外部ライブラリのインストール

:::danger[DANGER]
以下のライブラリをALCOMからインストールした場合、VRCSDKがインストールされます。

VRCSDKがインストールされると困る場合は、 [2024-12-08 他のアプリケーションでModular Avatarを動かす方法 | Haï~](https://docs.hai-vr.dev/docs/research/other/modular-avatar-on-other-apps-ja) をよく読んでください。
:::

**Modular Avatar**\
Docs: https://modular-avatar.nadena.dev/ja/ \
VPM Repo: https://vpm.nadena.dev/vpm.json \
VRChat向けアバターアセットによく見られる、アバタープレハブと衣装プレハブが分かれているもののアーマチュアを結合するために使います。
具体的には、 `uc:ModularAvatarMergeArmature` と `uc:ModularAvatarBoneProxy` は利用できることが想定されます。

:::info[INFO]
Modular Avatarのコンポーネントのうち、VRChatに依存しているものは利用できません。
（例えば、メニュ－やパラメータを操作するようなもの）\
また、VRChat向けにセットアップされた設定済みプレハブも、そのまま利用すると含まれているVRChatのコンポーネントがMissingになるため、可能なら避けた方が良いです。
:::

**AAO: Avatar Optimizer**\
Docs: https://vpm.anatawa12.com/avatar-optimizer/ja/ \
VPM Repo: https://vpm.anatawa12.com/vpm.json \
ボーン数やメッシュ数を削減したり、全体的な負荷軽減を行います。

本チュートリアルでは以上のツールの使い方の説明はしません。
使い方はそれぞれのリンク先を参照してください。

## To be continued...

この先は自分の目で確かめてみろ！
