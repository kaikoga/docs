---
sidebar_position: 120
---

# チュートリアル：Ablet only VRM1

VRCSDKとNDMFを使わず、 `ablet:Ablet` を利用してアバターカメラアプリ向けのVRM1.0アバターを構築するチュートリアルです。

:::info[INFO]
技術的には、NDMFをVRCSDKなしで動作させることは可能です。

しかし、NDMFのクロスプラットフォームサポートがVRChat向けアバター以外を扱いづらい、 `Chillaxins` が必要など、高度な知識を必要とするため、本チュートリアルでは推奨しません。
:::

## 前提条件

以下の事項に関して、基本的な知識を持っている人が対象です。

- Unityの操作
- UniVRM（もしくは、任意のアバタープラットフォーム）を使ったアバターのセットアップ

また、本チュートリアルでは、VRChat向けにセットアップされた衣装アセットのVRChat特有の設定を無視してFBXから直接セットアップすることを想定します。

### VRChat想定アバターの扱い方

VRChat想定でセットアップ済みのアバターアセットを取り扱う場合、一般的には、VRCSDKをインストールした環境で扱う方が（VRCSDKのコンポーネントから値を取り出せるため）簡単です。

#### VRCSDKと共存できるSDK

UniVRMや `ma:Modular Avatar Resonite` は（Unityのバージョンに互換性がある限りは）VRCSDKと同じプロジェクトにインストールできます。
この場合、１つのプロジェクトから複数のプラットフォームにアバターを書き出せるようになります。 

:::tip[TIPS]
Modular Avatar ResoniteはNDMF経由で動作する為、いずれにせよVRCSDKをインストールした方が良いです。
:::

#### VRCSDKと共存できないSDK

ChilloutVRやBasis Frameworkなどの環境では、VRCSDKと共存できないSDKを利用する必要があります。
この場合、VRCSDKをインストールしたUnityプロジェクトと対象のプラットフォームのSDKをインストールしたUnityプロジェクトの２つを作成して、おそらく設定の目コピーを行うことになるでしょう。

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
`alcom:ALCOM` を使ってください。

先ほどUnity Hubから作成したプロジェクトを `alcom:ALCOM` に認識させます。

`Create New Project` 右のドロップダウンメニューから `Add Existing Project` を選び、先ほど作成したプロジェクトを選択してください。

以下、 VPM Repo: の記述がある場合、 `alcom:ALCOM` の `Resources` タブから `Add Repository` を選択することで、 `alcom:ALCOM` からVPMパッケージを追加できるようになります。

:::info[INFO]
おそらく `alcom:ALCOM` の表示はあなたのシステムの言語に合わせて翻訳されているはずです。
読み替えてください。
:::

### ATiV Suiteのインストール

VPM Repo: https://vpm.kaikoga.net/index.json

ATiV Suite をインストールするか、以下の個別ライブラリをインストールしてください。

**Ablet**\
他のアバター編集ツールを自動的に動かすための基盤ライブラリです。

**Emote Wizard**\
VRMアバターの表情とリップシンクの設定を行います。

**Avatar Tinker Vista**\
VRMのメタデータを設定します。

**QuestReplacer**\
VRM1.0で使うMToon10マテリアルの生成と、ビルド時のマテリアル差し替えを行います。

### UniVRMのインストール

Avatar Tinker VistaのVRM1.0出力はUniVRMを利用するため、UniVRMをインストールしてください。

**UniVRM**\
Docs: https://vrm.dev/ \
GitHub Releases: https://github.com/vrm-c/UniVRM/releases \
UnityでVRMアバターを取り扱うために使います。

:::info[INFO]
UniVRM 0.131.0をUPMでインストールするには、以下のURLをいずれかの方法で追加してください。

- メニューバー → `Window` → `Package Manager` からPackage Managerを開き、左上の「＋」メニューから `Add package from git URL...` してください。
  - https://github.com/vrm-c/UniVRM.git?path=/Packages/UniGLTF#v0.131.0
  - https://github.com/vrm-c/UniVRM.git?path=/Packages/VRM#v0.131.0
  - https://github.com/vrm-c/UniVRM.git?path=/Packages/VRM10#v0.131.0
- または、 `Packages/manifest.json` の `dependencies` 以下に追記してください。

```
    "com.vrmc.gltf": "https://github.com/vrm-c/UniVRM.git?path=/Packages/UniGLTF#v0.131.0",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Packages/VRM#v0.131.0",
    "com.vrmc.vrm": "https://github.com/vrm-c/UniVRM.git?path=/Packages/VRM10#v0.131.0",
```

unitypackageによるインストールも可能です。
:::

:::tip[TIPS]
VRM以外のプラットフォームをターゲットする人は、読み替えてください。
:::

### 外部ライブラリのインストール

:::danger[DANGER]
以下のライブラリをALCOMからインストールした場合、VRCSDKがインストールされます。

VRCSDKがインストールされると困る場合は、 [2024-12-08 他のアプリケーションでModular Avatarを動かす方法 | Haï~](https://docs.hai-vr.dev/docs/research/other/modular-avatar-on-other-apps-ja) をよく読んでください。
:::

**Non-Destructive Modular Framework (NDMF)**\
Docs: https://modular-avatar.nadena.dev/ja/ \
VPM Repo: https://vpm.nadena.dev/vpm.json \
アバターを非破壊改変するツールを連携して動作させるために使います。

**Modular Avatar**\
Docs: https://modular-avatar.nadena.dev/ja/ \
VPM Repo: https://vpm.nadena.dev/vpm.json \
VRChat向けアバターアセットによく見られる、アバタープレハブと衣装プレハブが分かれているもののアーマチュアを結合するために使います。
具体的には、 `ma:ModularAvatarMergeArmature` と `ma:ModularAvatarBoneProxy` は利用できることが想定されます。

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

## NDMFコンポーネントの置き換え

Modular Avatarをインストールしなかった場合、例えば `ma:ModularAvatarMergeArmature` や `ma:ModularAvatarBoneProxy` は `ativ:AtivSimpleWear` で代替する必要があるでしょう。 

:::tip[TIPS]
VRCSDKがないので、 `vrcf:ArmatureLink` も置き換えが必要です。
:::

## To be continued...

この先は自分の目で確かめてみろ！
