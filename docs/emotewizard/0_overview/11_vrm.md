---
sidebar_position: 10
---

# VRM出力

Emote Wizardを用いてVRM0.x / VRM1.0アバターの表情を編集できます。

- BlendShape (VRM0)
- Expression (VRM1)

VRM0.xアバターとVRM1.0アバターで同じ表情設定を流用できます。

適切な方法でセットアップしている場合、VRChatアバターとVRMアバターで同じ表情設定を流用できます。

:::note[NOTE]
VRM0.x / VRM1.0出力を行う際は NDMF の Manual bake avatar または Apply on play が必要です。  

NDMF を用いない手動ビルドには対応していません。
:::

## セットアップ方法 (VRM0.x)

アバターのルートにVRM0.xの `VRM Meta` コンポーネントが付与されている場合、VRM0.xアバターとして認識されます。

:::note[NOTE]
Emote Wizardを利用する場合、 `VRM Meta Object` は必要に応じて自動的に作成されます。
:::

ほとんどの場合、VRM0.xアバターのプレビュー・出力が適切に動作するには `VRM Blend Shape Proxy` `VRM First Person` コンポーネントが必要です。
Emote Wizard を利用する場合、これらのコンポーネントは必要に応じて自動的に付与されます。

:::note[NOTE]
Emote Wizardを利用する場合、 `VRM Blend Shape Proxy` の `Blend Shape Avatar` は必要に応じて自動的に作成されます。
:::

まとめると、Emote Wizardを利用する場合は最低限 `VRM Meta` コンポーネントさえ追加すればVRM0.x出力は可能です。

なお、Emote Wizardで上書きされるBlendShape以外の設定（設定済みの `VRM Meta` や、SpringBoneの設定など）は全て維持されます。  

## セットアップ方法 (VRM1.0)

アバターのルートにVRM1.0の `VRMInstance` コンポーネントが付与されている場合、VRM1.0アバターとして認識されます。

:::note[NOTE]
Emote Wizardを利用する場合、 `VRM10 Object` は必要に応じて自動的に作成されます。
:::

ほとんどの場合、VRM1.0アバターのプレビュー・出力が適切に動作するには `Humanoid` コンポーネントが必要です。
Emote Wizard を利用する場合、コンポーネントは必要に応じて自動的に付与されます。

まとめると、Emote Wizardを利用する場合は最低限 `VRMInstance` コンポーネントさえ追加すればVRM1.0出力は可能です。

なお、Emote Wizardで上書きされるExpression以外の設定（設定済みの `VRMInstance` や、SpringBoneの設定など）は全て維持されます。  
