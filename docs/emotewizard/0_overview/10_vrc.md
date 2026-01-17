---
sidebar_position: 10
---

# VRChat出力

Emote Wizardを用いてVRChatアバターを編集できます。

- ハンドサインやExpressionメニューから制御できるアバターの表情
- Expressionメニューから制御できる動的な着せ替えアニメーション
- いわゆるActionエモート
- 上記の内容を実現するExpressions Menu・Expression Parametersの設定

## セットアップ方法

アバターのルートに `vrc:VRCAvatarDescriptor` コンポーネントが付与されている場合、VRChatアバターとして認識されます。

Emote Wizardは、Avatar SDK 3.0用の `vrc:VRCAvatarDescriptor` のうち、以下の設定を占有して完全に上書きします。

- Playable Layers
  - Gesture Layer
  - Action Layer
  - FX Layer
  - Sitting Layer
- Expressions
  - Expressions Menu
  - Expression Parameters

これ以外の設定はEmote Wizardでは変更しません。 `vrc:VRCAvatarDescriptor` および `vrc:PipelineManager` を通して設定してください。
