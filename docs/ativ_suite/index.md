---
sidebar_position: 1
---

# ATiV Suite

vpm.kaikoga.netから入手できる以下のツールを組み合わせることで、統一されたワークフローでVRChatおよびVRMアバターの破壊的非破壊改変を行うことができます。

- Avatar Tinker Vista
- Emote Wizard
- QuestReplacer
- Avatar Ranker Vista
- Ablet

:::tip[TIPS]
これらのツールは組み合わせて使うと大きな効果が得られるように設計されていますが、強い依存関係はありません。
役割が被る既存のツールを使い慣れている場合は、部分的にそれらと組み合わせても問題ありません。
:::

ATiV Suite をインストールすることで、以下の依存パッケージもインストールされます。

- AdLib

## 役に立つ状況

BOOTHのVRChat PC想定アバターを、変換結果を調整しながらQuest/VRM用に出力したい時に便利です。

## NDMF

ATiV Suiteのツールは、 `ndmf:NDMF` からも利用可能です。

以下のツールはNDMFプロジェクトに単体でインストールして利用することが可能です。

- Avatar Tinker Vista
- Emote Wizard
- QuestReplacer

以下のツールはNDMFから利用可能ですが、Abletに依存しています。

- Avatar Ranker Vista

## 使い方

### Avatar Tinker Vista

小さな非破壊改変＋破壊的非破壊改変ユーティリティの寄せ集めです。

NDMFにVRMを認識させるための機能も含まれています。

GitHub: https://github.com/kaikoga/AvatarTinkerVista-Unity

### Emote Wizard

アバターのVRChat向け・VRM向けの表情設定を一括で行える非破壊改変ツールです。

VRChat限定の機能になってしまいますが、衣装のON/OFFギミックなどにもある程度対応します。

GitHub: https://github.com/kaikoga/EmoteWizard-Unity

### QuestReplacer

VRChat PC→VRChat MobileやVRChat→VRMのマテリアル変換を行う破壊的非破壊改変ツールです。

GitHub: https://github.com/kaikoga/QuestReplacer-Unity

### Avatar Ranker Vista

アバターのパフォーマンスランクや、パフォーマンスランク以外を計算します。

GitHub: https://github.com/kaikoga/AvatarRankerVista-Unity

### Ablet

ATiV Suiteに含まれるアバター編集ツールを自動的に動かすための基盤ライブラリです。

NDMFがある環境ではNDMFと連携し、NDMFのない環境ではNDMFの代わりになります。

言い換えると、NDMFなしでもVRChatやVRMアバターの非破壊改変ができます。

GitHub: https://github.com/kaikoga/Ablet-Unity

## ATiV Suiteに含まれないアバターツール

以下のツールはATiV Suiteには含まれませんが、ATiV Suiteと組み合わせて利用可能です。

### NuguminTool

衣装着せ替え用にデフォルト衣装を着たアバターから素体だけのアバターを作成したり、衣装や髪型を抽出したりする破壊的非破壊改変ツールです。

GitHub: https://github.com/kaikoga/Modularizer-Unity

:::note[破壊的非破壊改変ってなんやねん]
VRChatで広く普及しているNDMFでは、Apply on Playやアバタービルドの段階でアバターに対して改変を行う指示を、プレハブやコンポーネントに閉じた形式でアバターまたはその子孫に追加することを非破壊編集と呼びます。
これらのアバター拡張は、プレハブやコンポーネントを削除することでアンインストールが完了し、中間アセットを生成することもありません。

Avatar Tinker Vistaのワークフローはしばしば（変換後のアセットを手動調整できるように）変換後のアセットや設定アセットの生成を伴います。
Avatar Tinker Vistaの設計思想上、これらの中間アセットは非破壊ではありません。
Avatar Tinker Vistaは中間アセットの再生成はできますが、手動調整した内容は（Prefab Variantなどを利用しない限り）失われます。
以上の理由から、Avatar Tinker Vista等はいわゆる非破壊改変ツールではありません。

非破壊改変の設定データを破壊的に生成するという言い方はできます。
また、ワークフローを工夫してAvatar Tinker Vistaを非破壊改変的に使うことができる場合もあるため、そのようなケースでは非破壊改変である、と言えるかもしれません。
:::

