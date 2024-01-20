---
sidebar_position: 0
---

# 全体的な概念

## Emote Wizard Root

Emote Wizardの全ての処理の起点となる、最初に作るコンポーネントです。


## Data Source

Emote WizardではEmote Wizard Rootやアバター以下の各所に設定用のコンポーネントを配置して、
アバタービルド時に各所の情報を収集して設定を統合することで必要なアバターセットアップを生成します。

この時に使う設定用のコンポーネントをData Source（または、単にSource）と呼びます。

:::note[NOTE]
SourceはEmote Wizard Rootの子孫に加えて、アバターの子孫に配置したものが認識されます。
Modular Avatarを利用する場合、衣装プレハブのPrefab Variantを作った上で追加でSourceの設定を行うことが可能です。
:::

なお、Data Sourceのうち、 **Emote Item Source** が機能するには追加のコンポーネントが必要です。
具体的には、 **Emote Sequence Source** または **Generic Emote Sequence Source** と一緒に働きます。

## Wizard

Data Sourceを手で設定するのは大変なので、Data Sourceを自動でセットアップするためのコンポーネントがあります。

まずWizardコンポーネントを設定し、「発動」をすることでWizardコンポーネントはセットアップ済みの複数のData Sourceコンポーネントに置き換わります。

Wizardはアバターをビルドする際は何の役割もありません。
WizardをData Sourceに変換することで初めて何かの役に立ちます。

## Emote Wizard Data Source Factory

SourceとWizard用のオブジェクトを手動で作成してAdd Componentするのは大変なので、SourceやWizardを作るためのコンポーネントを用意しました。

これ自体はUIにボタンを提供するだけで、アバターをビルドする際は何の役割もありません。

## Config

また、Emote Wizard Root自体の追加設定を行う補助的なコンポーネントもあります。  
Configと呼ばれるコンポーネントがそれです。

:::note[NOTE]
Configは必要に応じてEmote Wizard Rootと同じオブジェクトに追加されます。
ほとんどの場合、設定の必要はありません。
気にしなくて良いです。
:::

## 作業の流れ

以上をまとめると、アバターをセットアップする際にEmote Wizardを使う手順は以下のようになります。

- Emote Wizard Root を作る
- Data Sourceを作りたくなったら、まずはEmote Wizard Data Source FactoryからWizardを作る
- Wizardを「発動」して、Data Sourceにする
- 必要に応じて、Data Sourceを足す
