---
sidebar_position: 110
---

# チュートリアル：VRM1

VRChat PC向けのアバターを非破壊編集ワークフローでアバターカメラアプリ向けのVRM1.0に出力するチュートリアルです。

VRChatアバター特有の機能を使用していないほとんどのNDMFプラグインも利用可能です。

:::tip[TIPS]
cluster VRM1.0のアバターを出力する場合は、このチュートリアルの指示に従った後、 [チュートリアル＋：VRM1 cluster](tutorial_vrm1_cluster.md) を読んでください。
:::

## 前提条件

以下の事項に関して、基本的な知識を持っている人が対象です。

- Unityの操作
- （Modular Avatarを利用した）VRChat向けアバターの改変
- UniVRMアバターの改変

## VRCSDK Avatarsプロジェクトの作成

本チュートリアルではVRChat想定アバターの設定を読み込む目的でVRCSDKを利用します。

`alcom:ALCOM` などでVRCSDK Avatarsのプロジェクトを作成した上で、アバターのインポートを行ってください。

`alcom:ALCOM` があれば、 VPM Repo: のURLをリポジトリとして登録することで、VPMパッケージを追加できるようになります。

## ライブラリのインストール

:::info[INFO]
特に明記されていない場合、ライブラリは最新版をインストールするようにしてください。

特にNDMFのクロスプラットフォームサポートは歴史が浅く更新が活発なため、ベータ版のライブラリを使う方が安全です。
:::

### NDMFのインストール

`ma:Modular Avatar` を利用しているプロジェクトには既にインストールされているはずです。

（アバターが未改変、などの理由で）まだインストールされていない場合は、NDMFをインストールしてください。

**Non-Destructive Modular Framework (NDMF)**\
Docs: https://modular-avatar.nadena.dev/ja/ \
VPM Repo: https://vpm.nadena.dev/vpm.json \
アバターを非破壊改変するツールを連携して動作させるために使います。

### ATiV Suiteのインストール

VPM Repo: https://vpm.kaikoga.net/index.json

ATiV Suite をインストールするか、以下の個別ライブラリをインストールしてください。

**Ablet**\
他のアバター編集ツールを自動的に動かすための基盤ライブラリです。

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

### 外部ライブラリのインストール

**AAO: Avatar Optimizer**\
Docs: https://vpm.anatawa12.com/avatar-optimizer/ja/ \
VPM Repo: https://vpm.anatawa12.com/vpm.json \
ボーン数やメッシュ数を削減したり、全体的な負荷軽減を行います。

本チュートリアルでは以上のツールの使い方の説明はしません。
使い方はそれぞれのリンク先を参照してください。

## プロジェクトの準備

技術的な理由から、NDMFでVRMアバターを編集する際にはNDMFのApply on Playは不都合が多いです。

このため、Apply on Playの仕組みをNDMFからAbletに切り替えます。

メニューバーから `Tools` → `Ablet` → `Ablet Settings Window` を選択し、 `Ablet 優先設定` を押してください。

これでプロジェクトでApply on Playを扱えるようになります。

:::note[NOTE]
VRMアバターのApply on Playを行わないのであれば、この設定変更は不要です。

ただし、AbletではなくNDMFからビルドするため、ビルド手順が変わります。
:::

:::tip[TIPS]
`Ablet 優先設定` のままNDMFのプラグインを利用したりVRChatのアバターを改変しても、多くの場合は問題ありません。

ただし、NDMFのApply on Playとは挙動が異なる場合があります。
:::

## シーンの準備

もしあなたがアバターごとに別々のシーンを作るスタイルなら、新しいシーンを作ってください。

シーンにVRChat PC向けアバターのプレハブを置いてください。
プレハブのUnpackは不要です。

:::note[NOTE]
VRChat PCにアップロードするためのアバターとは別のオブジェクトとして編集することをお勧めします。

「アバターをVRChatにアップロードした時はVRChat向けの設定になり、VRM出力した時はVRM向けの設定に変わる」というワークフローは素晴らしく見えます。
しかし、自動変換だけで見た目を合わせるにはシェーダーの機能的差分が大きく、また自動変換でうまくいかなかった場合の微調整も難しいため、今回は目指しません。
:::

最後に、もしあなたがアバターのPrefab Variantを作るスタイルなら、アバターをPrefab Variantにしてください。

## セットアップ

### VRMアバターへの変更

1. `vrc:VRCAvatarDescriptor` と `vrc:PipelineManager` を削除してください。
1. アバターに `univrm1:Vrm10Instance` コンポーネントを追加してください。
   これがアバターをVRM1.0として扱うためのマーカーとなります。

:::info[INFO]
UniVRM単体でVRMアバターの改変を行う場合、 `univrm1:VRM10Object` の作成が必要になります。

Avatar Tinker Vistaで `univrm1:VRM10Object` を自動生成し、内容の設定まで全て行うため、UniVRMの `Create new VRM10Object and default Expressions. select target folder` ボタンを押す必要はありません。 
:::

### マテリアルの差し替え

VRChat向けアバターをVRM1.0へ出力するためには、マテリアルがUniVRMで利用可能である必要があります。

アバターを右クリック→ `Quest Replacer` → `New VRM1` から、 `qr:QuestReplacer` を作成してください。

`qr:QuestReplacer` の Database が必要に応じて自動生成されるので、クリックして参照し、必要に応じて `Generated Directory` 以下の設定を確認してください。

:::tip[TIPS]
生成された `qr:QuestReplacerDatabase` は `Assets/` 以下の好きなディレクトリに移動して良いです。
:::

アバターに戻ったら、 `qr:QuestReplacer` の `Sync and Generate` ボタンを押してください。
ダイアログが何回か表示される場合がありますが、 `OK` を押してください。

:::info[INFO]
シェーダーを変更するため、アバターの見た目がおかしくなることがあります。

その場合、生成されたシェーダーを調整して対応してください。
:::

### VRC PhysBonesの変換

VRChat向けアバターの揺れものをVRM1.0の出力に反映するためには、 `vrc:VRCPhysBone` をVRM1.0のSpringBoneに変換する必要があります。

1. アバターを右クリックし、 `Avatar Tinker Vista` → `Extract VRC PhysBones as ATiV Generate VRM0+1 SpringBones` を実行します。
   - ダイアログが表示されるので、 `Just Generate` をクリックします。 
1. アバターを右クリックし、 `Avatar Tinker Vista` → `Extract VRC Constraints as ATiV Generate VRM1 Constraints` を実行します。
   - ダイアログが表示されるので、 `Just Generate` をクリックします。
1. アバターの子に生成された `Secondary` オブジェクトに `ativ:AtivDeleteAllVRCPhysBones` コンポーネントを追加することで、アバターのVRC PhysBoneを削除するようにします。

アバターの子に生成された `Secondary` オブジェクト以下にSpringBoneの設定が入っている状態になります。

Unityのプレイモードに入ることで、 `ATiV Generate` 系コンポーネントは実際のVRMのSpringBoneに変換され、揺れものの動作確認ができます。 

:::info[INFO]
元の `vrc:VRCPhysBone` の設定を残してあるので、 `Secondary` 以下に生成されたAvatar Tinker Vistaコンポーネントを削除することで、生成をやり直すことが可能です。
:::

### 表情とリップシンクの設定

VRChatとVRMではアバターの表情設定の互換性がないため、このままだと表情が動かないアバターになります。

Emote WizardでVRMアバターの表情とリップシンクの設定が行えるため、利用します。

1. アバターを右クリックし、 `Emote Wizard` → `Emote Wizard Root` します。
1. `ew:EmoteWizardRoot` の `Setup` を開き、`Quick Setup VRM Sources` します。
1. `BlendShape Sources` の下に `ew:GenericEmoteSequenceSource` が生成されるので、内容を埋めます。

### VRMメタ情報の設定

VRMにメタ情報を設定します。

VRMメタ情報の設定はAvatar Tinker Vistaのコンポーネントで行います。

アバターに空の子オブジェクトを追加して、 `ativ:AtivOverwriteVRMMeta` コンポーネントを追加し、オブジェクトに適当な名前をつけてください。
このオブジェクトでは、VRM1.0に含まれるメタ情報を設定します。

### VRM一人称描画設定

VRMの一人称描画設定はAvatar Tinker Vistaのコンポーネントで行います。

アバターに空の子オブジェクトを追加して、 `ativ:AtivDefaultVRMFirstPerson` と `ativ:AtivMergeVRMFirstPerson` コンポーネントを追加し、オブジェクトに適当な名前をつけてください。
このオブジェクトでは、メッシュごとに一人称視点と三人称視点のどちらで描画されるかを設定します。

- `ativ:AtivDefaultVRMFirstPerson` の `First Person Offset` に、一人称視点の基準点を設定して下さい。
- 必要に応じて、 `ativ:AtivDefaultVRMFirstPerson` の `Default Value` を `Both` に設定してください。
  この設定は `ativ:AtivMergeVRMFirstPerson` で指定しなかったメッシュに適用されます。
- 必要に応じて、 `ativ:AtivMergeVRMFirstPerson` で頭や髪の毛などのメッシュを指定し、 `Third Person Only` を設定してください。

:::info[INFO]
`ativ:AtivDefaultVRMFirstPerson` の `Default Value` や `ativ:AtivMergeVRMFirstPerson` を `Auto` にすることもできます。
この場合、ヒューマノイドボーンに基づいて `Both` または `Third Person Only` が自動的に設定されます。

この方法のメリットは、簡単であることです。

この方法のデメリットとしては、 UniVRM によって自動的にメッシュが分割され、パフォーマンスに影響することがあります。
:::

## ビルド

AbletまたはNDMFプラグインの適用が必要なので、UniVRMのExport機能は使いません。

:::danger[DANGER]
UniVRMからExportを行うと使用されているテクスチャファイルの圧縮設定が無圧縮に上書きされます。
この状態でVRChatにアバターをアップロードすると、アバターのテクスチャメモリが大幅に増加します。

特にVRChatのアバターを同じプロジェクトで管理している場合は、UniVRMからExportを行わない方が良いです。
:::

### Abletからビルドする場合

メニューバーの `Tools` → `Ablet` → `Ablet Console Window` を選んでください。

`Select Scene Entrypoints` からアバターを選択し、表示される `Export VRM1.0 Avatar` ボタンをクリックしてください。
保存先選択ダイアログで指定されたパスにVRMファイルが生成されます。

:::tip[TIPS]
`ativ:AtivExportVRMUI` コンポーネントのインスペクタに表示される `Export VRM1.0 Avatar with Ablet` ボタンは同じ機能を持ちます。
:::

### NDMFからビルドする場合

メニューバーの `Tools` → `NDM Framework` → `Show NDMF Console` を選んでください。

アバターを選択し、Avatar Platformの`VRM 1.0 (ATiV)`を選択してから、表示される `Export VRM1.0 Avatar with NDMF` ボタンをクリックしてください。
保存先選択ダイアログで指定されたパスにVRMファイルが生成されます。

:::tip[TIPS]
`ativ:AtivExportVRMUI` コンポーネントのインスペクタに表示される `Export VRM1.0 Avatar with NDMF` ボタンは同じ機能を持ちます。
:::
