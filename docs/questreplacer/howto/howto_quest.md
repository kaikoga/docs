---
sidebar_position: 10
---

# 使い方（Quest対応）

「GameObject」→「QuestReplacer」→「New VRChat Mobile」で、PC版のマテリアルをMobile版のマテリアルに差し替える `uc:QuestReplacer` オブジェクトを作成します。

:::tip[TIPS]
コンテキストメニューから `uc:QuestReplacer` を作らなかった場合、操作対象のアバターは以下の方法で指定します。

- 「Targets」を指定するか、「Target Scene Objects」をチェックしてください。
- あるいは、NDMFのある環境では、アバターの子に `uc:QuestReplacer` を移動してください。
:::

## 簡単な使い方

`uc:QuestReplacerDatabase` の設定を確認したのち、 `uc:QuestReplacer` の `Sync and Generate` ボタンを押せば完了です。

## マニアックな使い方

`Load` を押すと置き換えパターンがデータベースから読み込まれます。

`Collect` を押すと操作対象のアバターに含まれるマテリアルがリストアップされます。

`GenerateVRChatToonStandard Materials` を押すと、PC版のマテリアルに対応するMobile版のマテリアルが自動作成され、置き換えパターンが `uc:QuestReplacer` に登録されます。

`Save` を押すと置き換えパターンがデータベースに保存されます。

NDMFを利用している場合、アバターやビルド設定に基づくプラットフォームが一致していれば置換結果がNDMFプレビューで表示されます。
置換結果がNDMFプレビューに反映されていない場合、Switch PlatformからAndroidを選択してください。

NDMFを利用しない場合、「To Left」または「To Right」でアバターに含まれるマテリアルを一括で置換します。

## 自動作成されるマテリアル

`Standard` シェーダーは `VRChat/Mobile/Standard Lite` になります。

それ以外はQuestReplacer Configの設定に応じて `VRChat/Mobile/Toon Standard` または `VRChat/Mobile/Toon Lit` になります。

:::tip[TIPS]
VRC Quest Toolsがインストールされている場合、,マテリアル自動生成の精度が改善されます。
:::
