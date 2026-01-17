---
sidebar_position: 1
---

# Ablet

## 概要

AbletはAvatar Tinker Vistaなどのアバターツールを動かす基盤となるライブラリです。

- Abletを使うことで、Unityのアセットに対してプロシージャルな編集および最適化を適用できます。
  - いわゆる「非破壊改変」です。
- Abletは現在存在が認知されているサービス提供中のソーシャルVRプラットフォームで使用されるUnityのうち最も低いLTSバージョンをサポートします。
  - 現在の想定最低バージョンは `2021.3` です。
    しかし、十分にテストされていないかもしれません。
- Abletはアバター改変に利用可能ですが、アバターに限定されません。
- AbletはUnity組み込みのライブラリ以外の特定のライブラリに依存しません。

## 主な機能

### Apply on Play
  
プレイモードに遷移した際、アクティブな適用対象に対してAbletの編集を自動的に適用します。

:::tip[TIPS]
NDMFのApply on Playとは以下の点が異なります。

- プレイモードに遷移したタイミングで非アクティブな適用対象に対してはApply on Playは適用されません。
- アバタープラットフォームの変換は行われません。
:::

#### Manual Apply

手動でAbletの編集を適用します。

#### Inplace Preview

Abletプラグインは、特定のアニメーションなどを適用した結果を確認する機能を持つことがあります。
これをInplace Previewと呼びます。

:::tip[TIPS]
NDMFのプレビューとはかなり異なる概念です。
NDMFのプレビューはアバターをビルドした時の見た目をリアルタイムに再現する機能ですが、AbletのInplace Previewは特定の状態に置かれたアバターをその場で確認する機能です。
:::

#### Enhance Inplace Preview

Enhance Inplace Previewが有効の場合、一部のAbletの編集が適用された見た目を確認できます。

- Inplace Previewを行っている間
- Inplace Previewを行っていないが、アバターを選択している間

:::tip[TIPS]
Enhance Inplace Previewを常時有効にするのではなく、必要に応じてオン・オフを切り替える使い方を想定しています。
:::

:::tip[TIPS]
Inplace PreviewまたはEnhance Inplace Previewのいずれかが動作中はNDMFのプレビューは表示されません。
:::

## VRCSDKとの関係

VRCSDKの存在する環境では、AbletはVRCSDKのビルド時コールバックに対応して動作します。

VRCFuryやd4rk Avatar Optimizerなど、VRCSDKのビルド時コールバックを利用するツールとAbletは共存できる場合があります。
ただし、以下のような制限があります。

- Abletレイヤーの適用順はVRCSDKのビルド時コールバックの優先度で大ざっぱに指定されます。
  そのため、Abletレイヤーの間にVRCSDKのビルド時コールバックを挟むことは難しくなります。
- ツールの性質上、VRChat向けアバター以外のプロシージャル編集を行うことはできません。

## VRCFuryとの関係

VRCFuryとAbletの同時使用はサポートされません。

## NDMFとの関係

NDMFの存在する環境では、AbletはNDMFと連携して動作します。

:::danger[DANGER]
AbletとNDMFを連携させたことによる不具合があった場合、それはAbletまたはプラグインの問題です。

NDMFに問い合わせないでください。
:::

NDMFの存在する環境では、プラグインは以下の３つに分類されます。

- Ablet専用プラグイン
- NDMF専用プラグイン
- Ablet NDMFハイブリッドプラグイン

:::info[INFO]
**Avatar Tinker Vista** 、 **Emote Wizard** 、 **QuestReplacer** 、 **Avatar Ranker Vista** は、いずれもAblet NDMFハイブリッドプラグインです。
:::

NDMF環境、またはAblet環境において、これらのプラグインを共存させるためのいくつかの追加機能が提供されます。

`Ablet on NDMF` または `NDMF on Ablet` のどちらかを有効にすることで、Ablet専用プラグインまたはNDMF専用プラグインを、もう片方で使えるようにします。

- `Ablet on NDMF` は、NDMFのビルド時にAbletプラグインを適用します。
  NDMFプラグインをメインで利用しているプロジェクトにAblet専用プラグインを追加したい場合に推奨される設定です。
- `NDMF on Ablet` は、Abletのビルド時にNDMFプラグインを適用します。
  Abletプラグインをメインで利用しているプロジェクトにNDMF専用プラグインを追加したい場合に推奨される設定です。

`Prefer Ablet` で、 Ablet NDMFハイブリッドプラグインの動作を指定します。

デフォルトでは、 `Ablet on NDMF` のみが有効です。

:::warning[WARNING]
`Ablet on NDMF` と `NDMF on Ablet` のどちらも有効にしていない状態でAbletとNDMFを併用した場合、プラグインの処理順は未定義になります。
例えば、ビルドのたびに出力結果が変化する可能性があります。
:::

## UniVRMとの関係

UniVRMのUIからエクスポートした場合、アバターに含まれるテクスチャのインポート設定が破壊されます。

ref: https://github.com/vrm-c/UniVRM/issues/964

これは同じテクスチャをVRMとVRM以外の両方から参照している場合に問題になるため、AbletのUIからVRMファイルをエクスポートした場合はテクスチャのインポート設定は変更されません。

