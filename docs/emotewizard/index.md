---
sidebar_position: 1
---

# Emote Wizard

## これは何？

VRChatのAvatar SDK3.0 用のアバターのセットアップを支援するツールです。

Emote Wizardは、以下の内容を一括管理するツールです。

- ハンドサインやExpressionメニューから制御できるアバターの表情
- Expressionメニューから制御できる動的な着せ替えアニメーション
- いわゆるActionエモート
- いわゆるAFKエモート
- 上記の内容を実現するExpressions Menu・Expression Parametersの設定

Emote Wizardは、Avatar SDK 3.0用のVRCAvatarDescriptorのうち、以下の設定を占有して完全に上書きします。

- Playable Layers
  - Gesture Layer
  - Action Layer
  - FX Layer
  - Sitting Layer
- Expressions
  - Expressions Menu
  - Expression Parameters

これ以外の設定はEmote Wizardでは変更しません。

### 動作環境

Emote Wizard 0.100.0 を利用するためには以下の環境が必要です。

- Unity 2022 以上
- VRCSDK Avatars 3.5.0 以上

また、 NDMF および Modular Avatar を利用する場合に自動的に有効になる追加の機能があります。

- NDMFがインストールされている場合、Emote WizardはNDMFのプラグインとして動作します。
- Emote WizardがNDMFのプラグインとして動作する場合、 Generating フェーズで動作します。

### 動作確認環境

Emote Wizard 0.100.0 は以下の環境で動作を確認しています。

- Unity 2022.3.6f1
- 最新のVRCSDK Avatars
- 最新のNDMF

これ以外の環境でも動作するかもしれませんが、自己責任でお願いします。
また、上記の環境を満たしている場合も、動作保証や他のツールとの相性などのサポート対応は致しかねる場合があります。
ご了承ください。

### 利用条件

本ソフトウェアは MIT License にて配布いたします。
私的利用を超えた範囲で利用または再配布を行う場合は、 MIT License の条件に従ってください。

また、kaikogaは、Emote Wizardの正常動作に関して一切の保障をいたしません。
このドキュメントではUnityの基本操作も特に説明はいたしません。
