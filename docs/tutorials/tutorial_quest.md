---
sidebar_position: 100
---

# チュートリアル：VRChat Mobile VeryPoor

VRChat PC向けのアバターをNDMFワークフローでVRChat Mobile (VeryPoor) に対応するとてもシンプルなチュートリアルです。

:::info[INFO]
いわゆる「Quest VeryPoor対応」です。

できる範囲でアバターの軽量化を行うことは重要ですが、Unityを使って現代的なVRChat PC想定アバターをもとにしてMobileパフォーマンスランクPoorを目指すことは非常に困難なので、本チュートリアルでは扱いません。
:::

このチュートリアルではVRC Quest Toolsの機能を控えめに活用します。

Avatar Tinker VistaによるVRM出力とワークフローが統一されるほか、マテリアルの差し替えに融通とNDMFプレビューが効くようになります。

## 前提条件

以下の事項に関して、基本的な知識を持っている人が対象です。

- Unityの操作
- （Modular Avatarを利用した）VRChat向けアバターの改変

## VRCSDK Avatarsプロジェクトの作成

もしまだ作成していなければ、 `alcom:ALCOM` などでVRCSDK Avatarsのプロジェクトを作成した上で、アバターのインポートを行ってください。

`alcom:ALCOM` があれば、 VPM Repo: のURLをリポジトリとして登録することで、VPMパッケージを追加できるようになります。

## ライブラリのインストール

:::info[INFO]
特に明記されていない場合、ライブラリは最新版をインストールするようにしてください。
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

**QuestReplacer**\
VRChat Mobile用マテリアルの生成と、ビルド時のマテリアル差し替えを行います。
 
**Avatar Ranker Vista** （オプション）\
代わりに、 `anatawa12's gists pack` の `Actual Performance Window` も利用可能です。

### 外部ライブラリのインストール

**VRC Quest Tools**\
Docs: https://kurotu.github.io/VRCQuestTools/ja/ \
VPM Repo: https://kurotu.github.io/vpm-repos/vpm.json \
QuestReplacerから間接的に利用します。

**AAO: Avatar Optimizer**\
Docs: https://vpm.anatawa12.com/avatar-optimizer/ja/ \
VPM Repo: https://vpm.anatawa12.com/vpm.json \
ボーン数やメッシュ数、メッシュのシェイプキー数を削減することで、全体的な負荷軽減を行います。

本チュートリアルでは以上のツールの使い方の説明はしません。
使い方はそれぞれのリンク先を参照してください。

## プロジェクトの準備

特にすることはありません。

## シーンの準備

もしあなたがアバターごとに別々のシーンを作るスタイルなら、新しいシーンを作ってください。

シーンにVRChat PC向けアバターのプレハブを置いてください。
プレハブのUnpackは不要です。

:::note[NOTE]
VRChat PCにアップロードするためのアバターとは別のオブジェクトとして編集することをお勧めします。

「アバターをPCアップロードした時はPC向けの設定になり、Mobileアップロードした時はMobile向けの設定に変わる」というワークフローは素晴らしく見えます。
しかし、自動変換だけで見た目を合わせるにはシェーダーの機能的差分が大きく、また自動変換でうまくいかなかった場合の微調整も難しいため、今回は目指しません。
:::

最後に、もしあなたがアバターのPrefab Variantを作るスタイルなら、アバターをPrefab Variantにしてください。

## セットアップ

### マテリアルの差し替え

VRChat Mobile向けにアバターをアップロードするためには、マテリアルがVRChat Mobile対応である必要があります。

VRC Quest Toolsの `vqt:AvatarConverterSettings` を設定することでアバタービルド時にマテリアルを自動変換できますが、今回はこれを直接使用せず、QuestReplacer経由で使います。

:::info[INFO]
VRC Quest ToolsをインストールしなくてもQuestReplacerは利用できますが、その場合、Quest対応シェーダー変換の精度が落ちます。
シェーダーを生成した後に見た目を微調整する作業が増えます。
:::

アバターを右クリック→ `Quest Replacer` → `New VRChat Mobile` から、 `qr:QuestReplacer` を作成してください。

QuestReplacer の Database が必要に応じて自動生成されるので、クリックして参照し、必要に応じて `Generated Directory` 以下の設定を確認してください。

:::tip[TIPS]
生成されたQuestReplacer DatabaseはAssets以下の好きな場所に置いて良いです。
:::

アバターに戻ったら、 `qr:QuestReplacer` の `Sync and Generate` ボタンを押してください。

:::info[INFO]
シェーダーを変更するため、アバターの見た目がおかしくなることがあります。

その場合、生成されたシェーダーを調整して対応してください。
:::

### PhysBonesの削減

VRChat Mobile向けにアバターをアップロードするためには、Avatar Dynamics（揺れもの）の制限を満たす必要があります。

VRC Quest Toolsの `vqt:AvatarConverterSettings` から `Avatar Dynamics Settings` を調整することで揺れものを削減できますが、今回はこれを使用せず、Avatar Tinker Vistaの `ativ:AtivReduceDynamics` を使います。

アバターの子に適当な空オブジェクトを追加して、 `ativ:AtivReduceDynamics` コンポーネントを追加してください。

`Add All VRC PhysBones` を押すと全てのVRC PhysBoneの対象Transformがリストに追加されるので、見た目への影響が少ない揺れものをリストから削除してください。

:::tip[TIPS]
代わりにAvatar Tinker Vistaの `ativ:AtivDeleteAllVRCPhysBones` をアバターに追加することで、全てのVRC PhysBoneを問答無用で削除することもできます。
:::

### 容量の削減

VRChat Mobile向けにアバターをアップロードするためには、アバターのビルドサイズの制限を満たす必要があります。

アバターのビルドサイズを削減する上では様々な要素に着目する必要がありますが、以下にいくつかのヒントを提示します：

- AAO: Avatar Optimizerの `aao:TraceAndOptimize` はアバターの見た目や振る舞いに影響を与えずにビルドサイズやパフォーマンスを最適化します。
- テクスチャの削減を行います。

### テクスチャの削減

VRChat Mobileアバターにはテクスチャサイズのハードリミットはありませんが、テクスチャを最適化しておくに越したことはありません。

モバイルプラットフォーム向けにテクスチャのインポート設定から圧縮設定を調整することで、ビルドサイズを削減できるほか、ビデオメモリの使用量を最適化します。
テクスチャのインポート設定の `Max Size` が2048や4096などの大きい数字になっていた場合、より小さい数字を選んで全てのプラットフォームに適用したり、 `Override for Android` を有効にして一部のプラットフォームに適用したりできます。

:::tip[TIPS]
テクスチャサイズ以外の変更は効果が小さいため、VeryPoor対応においてはほとんどの場合必要ありません。
:::

## ビルド

VRChatへのアバターアップロード操作を行うことで、NDMFの処理が適用された状態でアバターがアップロードされます。

