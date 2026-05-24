---
sidebar_position: 9000
---

# Emote Wizard Extension

`ativ:AvatarTinkerVistaExtension` と一緒に利用することで、以下の機能が有効になります。

- ChilloutVR Support

:::warning[WARNING]
これは開発中であり、実験的な機能です。一部の機能は動作しません。
:::

## ChilloutVR Support

<PlatformBadge id="ChilloutVR" />

EmoteWizardからChilloutVRのアバターの表情を出力できるようになります。

- たぶん動く
  - ハンドサインを利用した表情切り替え
  - 衣装の ON / OFF 切り替えトグル
  - 複数状態を持つパラメータ
- おそらく動かない
  - カスタムActionエモート
  - ChilloutVRのAdvanced Settingsに対応する概念が存在しない機能
    - VRCSDKのButtonおよびFourAxisPuppet相当の動作
    - VRCSDKのSubMenu相当の機能

`ew:EmoteItemSource` や `ew:EmoteSequenceSource` の内容に応じてChilloutVR用のAnimator ControllerとAnimator Override Controllerを出力します。

また、パラメータを読み取るEmote Itemが存在する場合、 `cvr:CVRAvatar` のAdvanced Settingsが出力されます。
`ew:ExpressionItemSource` の内容はAdvanced Settingsの出力に影響を与えます。

### パラメータスキーム

ChilloutVR Support を利用する場合、 `ew:EmoteWizardRoot` に `パラメータスキーム` の項目が追加されます。

`パラメータスキーム` が `自動検出` の場合、ChilloutVRのアバターで利用されるAnimatorパラメータはChilloutVRのセマンティクスで解釈されます。

`パラメータスキーム` を `VRChat` に変更することで、AnimatorパラメータをVRChatのセマンティクスで解釈した上、ChilloutVRで利用されるパラメータ名に変換して出力するようになります。
例えば、EmoteWizardのパラメータ名として `GestureLeft` を設定した場合、ChilloutVRのアバターでは `GestureLeftIdx` として出力されます。
VRChat向けに設定したアバターをChilloutVRに出力する場合に便利です。

### 既知の不具合

- VRCEmoteは利用できません。
  - ChilloutVRのEmoteを再生した場合、デフォルトのエモートが再生されます。
  - VRChatのVRCEmoteに反応するエモートをChilloutVRに変換して出力した場合、動作しません。
- Advanced Settingsが正しく出力されない場合があります。

### 仕様

- パラメータ型が `HandSign` の場合、プラットフォームに応じた読み替えが行われます。
- ハンドサイン以外のパラメータ値は完全に維持されます。
- `ew:ExpressionItemSource` の内容に応じたAdvanced Settingsの生成を試みますが、パラメータ型の制約を受けます。
  - 例えば、パラメータがBoolまたは２値Autoの場合、単一の（Advanced Settingsの）Toggleが生成され、 `ew:ExpressionItemSource` の `パス` の値は利用されません。
- パラメータで利用される値が密ではない場合、Advanced SettingsのDropdownから操作するための追加のパラメータが生成される場合があります。
- 
