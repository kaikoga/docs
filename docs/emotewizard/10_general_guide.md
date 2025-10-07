---
sidebar_position: 0
---

# コンポーネント概要

## Emote Wizard Root

Emote Wizardの全ての処理の起点となる、最初に作るコンポーネントです。

## Data Source

Emote Wizardでは`uc:EmoteWizardRoot`やアバター以下の各所に設定用のコンポーネントを配置して、
アバタービルド時に各所の情報を収集して設定を統合することで必要なアバターセットアップを生成します。

この時に使う設定用のコンポーネントをData Source（または、単にSource）と呼びます。

:::note[NOTE]
Sourceは`uc:EmoteWizardRoot`の子孫に加えて、アバターの子孫に配置したものが認識されます。
Modular Avatarを利用する場合、衣装プレハブのPrefab Variantを作った上で追加でSourceの設定を行うことが可能です。
:::

なお、Data Sourceのうち、 `uc:EmoteItemSource` が機能するには追加のコンポーネントが必要です。
具体的には、 `uc:EmoteSequenceSource` または `uc:GenericEmoteSequenceSource` と一緒に働きます。

## Wizard

Data Sourceを手で設定するのは大変なので、Data Sourceを自動でセットアップするためのコンポーネントがあります。

まずWizardコンポーネントを設定し、「発動」をすることでWizardコンポーネントはセットアップ済みの複数のData Sourceコンポーネントに置き換わります。

Wizardはアバターをビルドする際は何の役割もありません。
WizardをData Sourceに変換することで初めて何かの役に立ちます。

## Emote Wizard Data Source Factory

SourceとWizard用のオブジェクトを手動で作成してAdd Componentするのは大変なので、SourceやWizardを作るためのコンポーネントを用意しました。

これ自体はUIにボタンを提供するだけで、アバターをビルドする際は何の役割もありません。

## Config

また、 `uc:EmoteWizardRoot` 自体の追加設定を行う補助的なコンポーネントもあります。  
Configと呼ばれるコンポーネントがそれです。

:::info[INFO]
Configは必要に応じて `uc:EmoteWizardRoot` と同じオブジェクトに追加されます。
一般的なユースケースにおいては設定不要です。
:::

## 作業の流れ

以上をまとめると、アバターをセットアップする際にEmote Wizardを使う手順は以下のようになります。

- Emote Wizard Rootを作る
- Data Sourceを作りたくなったら、まずは `uc:EmoteWizardDataSourceFactory`からWizardを作る
- Wizardを「発動」して、Data Sourceにする
- 必要に応じて、Data Sourceを足す
