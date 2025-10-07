---
sidebar_position: 10
---

# VRM出力

Emote Wizardを用いてVRM0.x / VRM1.0アバターの表情を編集できます。

- BlendShape (VRM0)
- Expression (VRM1)

VRM0.xアバターとVRM1.0アバターで同じ表情設定を流用できます。

適切な方法でセットアップしている場合、VRChatアバターとVRMアバターで同じ表情設定を流用できます。

:::info[INFO]
VRM0.x / VRM1.0出力を行う際はNDMFのManual bake avatarまたはAvatar Tinker Vistaが必要です。  

NDMFを用いない手動ビルドには対応していません。

Avatar Tinker Vistaをインストールすることを強く推奨します。
:::

## セットアップ方法 (VRM0.x)

アバターのルートにVRM0.xの `uc:VRMMeta` コンポーネントが付与されている場合、VRM0.xアバターとして認識されます。

:::tip[TIPS]
Avatar Tinker Vistaがインストールされている場合、 `uc:VRMMetaObject` は必要に応じて自動的に作成されます。
:::

ほとんどの場合、VRM0.xアバターのプレビュー・出力が適切に動作するには `uc:VRMBlendShapeProxy` `uc:VRMFirstPerson` コンポーネントが必要です。
Emote Wizardを利用する場合、これらのコンポーネントは必要に応じて自動的に付与されます。

:::tip[TIPS]
Avatar Tinker Vistaがインストールされている場合、 `uc:VRMBlendShapeProxy` の `uc:BlendShapeAvatar` は必要に応じて自動的に作成されます。
:::

まとめると、Emote WizardをAvatar Tinker Vistaと一緒に利用する場合は最低限 `uc:VRMMeta` コンポーネントさえ追加すればVRM0.x出力は可能です。

なお、Emote Wizardで上書きされるBlendShape以外の設定（設定済みの `uc:VRMMeta` や、SpringBoneの設定など）は全て維持されます。  

## セットアップ方法 (VRM1.0)

アバターのルートにVRM1.0の `uc:Vrm10Instance` コンポーネントが付与されている場合、VRM1.0アバターとして認識されます。

:::tip[TIPS]
Avatar Tinker Vistaがインストールされている場合、 `uc:VRM10Object` は必要に応じて自動的に作成されます。
:::

ほとんどの場合、VRM1.0アバターのプレビュー・出力が適切に動作するには `uc:Humanoid` コンポーネントが必要です。
Emote Wizardを利用する場合、コンポーネントは必要に応じて自動的に付与されます。

まとめると、Emote WizardをAvatar Tinker Vistaと一緒に利用する場合は最低限 `uc:Vrm10Instance` コンポーネントさえ追加すればVRM1.0出力は可能です。

なお、Emote Wizardで上書きされるExpression以外の設定（設定済みの `uc:Vrm10Instance` や、SpringBoneの設定など）は全て維持されます。  
