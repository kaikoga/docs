---
sidebar_position: 111
---

# チュートリアル＋：VRM1 cluster

VRChat PC向けのアバターをNDMFワークフローでVRM1.0に出力した上で、ある程度のアバター最適化を行い、cluster VRM1.0の制限に対応する追加チュートリアルです。

## 前提条件

[チュートリアル：VRM1](tutorial_vrm1.md) のセットアップが済んでいることが前提となります。

また、以下の事項に関して、基本的な知識を持っている人が対象です。

- Unityの操作
- （Modular Avatarを利用した）VRChat向けアバターの改変
- UniVRMアバターの改変
- cluster VRM1.0 のアバター制限

## ライブラリの追加インストール

:::info[INFO]
特に明記されていない場合、ライブラリは最新版をインストールするようにしてください。
:::

### ATiV Suiteのインストール

VPM Repo: https://vpm.kaikoga.net/index.json

ATiV Suite をインストールするか、以下の個別ライブラリをインストールしてください。

**Avatar Ranker Vista**\
ビルド時にアバターがclusterの制限に対応しているかどうかを確認します。

### 外部ライブラリの追加インストール

**Meshia Mesh Simplification**\
Docs: https://ramtype0.github.io/Meshia.MeshSimplification/index.html \
VPM Repo: https://ramtype0.github.io/VpmRepository/index.json \
メッシュのポリゴン数を削減します。

**TexTransTool** （上級者向け）\
Docs: https://ttt.rs64.net/ \
VPM Repo: https://vpm.rs64.net/vpm.json \
マテリアルの数やビデオメモリなどのリソース消費量を削減します。テクスチャの非破壊加工を行うこともできます。

使い方はそれぞれのリンク先を参照してください。

## アバターの最適化

#### SpringBoneの削減

clusterにVRM1.0アバターをアップロードするためには、SpringBoneの制限を満たす必要があります。

プロジェクトにAvatar Ranker VistaとUniVRMが入っているため、アバターのビルド時にcluster VRM1.0 の制限が計算され、Avatar Ranker Vistaのウィンドウに表示されます。

揺れものやコライダーの数が多すぎる場合は、以下のいずれかの方法で揺れものやコライダーの数を削減してください。

- 単に `ATiV Generate` 系コンポーネントのついたオブジェクトを削除する。
- もしくは、対象のオブジェクトに `ativ:AtivDisableAtivComponents` コンポーネントを追加することで、Avatar Tinker Vistaのコンポーネントを無効化する。

### ポリゴン数の削減

clusterにVRM1.0アバターをアップロードするためには、ポリゴン数の制限を満たす必要があります。

:::info[INFO]
cluster VRM1.0 のポリゴン数の制限は、全メッシュの合計で72000ポリゴンです。
おおよそVRChat PCのPoor相当までポリゴン数を削減する必要があります。
:::

Meshia Mesh Simplificationの `mms:MeshiaCascadingAvatarMeshSimplifier` を使います。

・・・と言いたいところですが、どうやら現在 `mms:MeshiaCascadingAvatarMeshSimplifier` はVRMアバターに対してNDMFプレビューが動作しないようです。
NDMFプレビューを用いてリアルタイムでポリゴン削減の状況を確認するには、以下のいずれかの方法を使ってください。

#### 方法１：ストロングスタイル

- `mms:MeshiaMeshSimplifier` を直接 `MeshRenderer` や `SkinnedMeshRenderer` に追加して頑張ってください。

#### 方法２：VRChat用アバターから設定をコピーしてくる

`vrc:VRCAvatarDescriptor` がついているVRChat用アバターで `mms:MeshiaCascadingAvatarMeshSimplifier` を調整してください。

コンポーネント右端のメニューから `Copy Component` → `Paste Component As New` することで、VRChat用アバターからVRMアバターに `mms:MeshiaCascadingAvatarMeshSimplifier` の設定をコピーできます。

#### 方法３：一時的にアバターをVRChat用アバターにする

一時的にVRMアバターに `vrc:VRCAvatarDescriptor` をつけることで、NDMFプレビューが動作します。

パラメータの調整作業が終わったら、忘れずに `vrc:VRCAvatarDescriptor` と `vrc:PipelineManager` を削除してください。

### 容量の削減

clusterにVRM1.0アバターをアップロードするためには、アバターのリソース使用量の制限を満たす必要があります。

アバターのリソース使用量を削減する上では様々な要素に着目する必要がありますが、以下にいくつかのヒントを提示します：

- AAO: Avatar Optimizerの `aao:TraceAndOptimize` はアバターの見た目や振る舞いに影響を与えずにビルドサイズやパフォーマンスを最適化します。
  :::info[INFO]
  VRMはシェイプキーの数がデータ容量に与える影響が大きいため、シェイプキー数を削減する `aao:TraceAndOptimize` はビルドサイズの削減に非常に有効です。
  :::
- テクスチャの削減を行います。

### テクスチャの削減

clusterにVRM1.0アバターをアップロードする際、ピクセル数の制限を超えているテクスチャは自動的に圧縮されます。

これは上手くいくこともありますが、多くの場合あらかじめ制限を満たすように手動でテクスチャを最適化した方がより望ましい見た目になります。

テクスチャを最適化するにはいくつかの方法があります：

モバイルプラットフォーム向けにテクスチャのインポート設定からテクスチャサイズを調整することで、ビルドサイズを削減できるほか、ビデオメモリの使用量を最適化します。
テクスチャのインポート設定の `Max Size` が2048や4096などの大きい数字になっていた場合、より小さい数字を選んで全てのプラットフォームに適用したり、 `Override for Android` を有効にして一部のプラットフォームに適用したりできます。

:::tip[TIPS]
VRM出力においては圧縮設定は参照されません。

また、VRChatのアバターを変換する場合において、ほとんどの場合clusterの制限はテクスチャサイズの制限が厳しい一方でテクスチャ数には（MToonが参照するテクスチャの数が少ないこともあって）余裕があるため、テクスチャサイズを調整するだけで問題ないことが多いです。
:::

:::tip[TIPS]
（上級者向け）TexTransToolの `ttt:AtlasTexture` を使うことで、複数マテリアルにわたってテクスチャの最適化を行います。
この設定はVRChat Mobile対応でも役に立つかもしれません。
:::

## ビルド

アバターをVRM1.0に出力することで、おそらくcluster VRM1.0の制限に対応したVRM1.0ファイルが生成されます。
