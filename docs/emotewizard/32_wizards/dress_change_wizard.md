---
sidebar_position: 300
---

# Dress Change Wizard

![Inspector](img/dress_change_wizard.png)

一つのパラメータで切り替わる一連の **Emote Item Source** を生成します。

着せ替えパターンはFXレイヤーに追加されます。

- `パス`: メニューアイテムの生成先です。
- `グループ`: グループを設定します。
- `パラメータ`: パラメータを設定します。
- `型式`: メニューアイテムを選択します。
  - `Builtin`: **Expression Item Source** は生成されません。サブメニュー内のトグルで切り替えます。
  - `Toggle Items`: サブメニュー内のトグルで切り替える **Expression Item Source** を生成します。
  - `Simple Toggle`: トグルから２つの着せ替えパターンを切り替える **Expression Item Source** を生成します。
  - `Simple Radial`: ラジアルパペットから切り替える **Expression Item Source** を生成します。
- `アイテム数` 着せ替えのパターン数を設定します。
- `Emote Sequenceタイプ`: **Emote Sequence Source** または **Generic Emote Sequence Source** を選択します。
