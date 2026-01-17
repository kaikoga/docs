---
sidebar_position: 1
---

# NDMF VRM0+1サポート

:::note[NOTE]
後述する理由から、VRMアバターの改変を行う上では `ablet:Ablet` の利用が推奨されます。
:::

以下のライブラリが含まれるプロジェクトにAvatar Tinker Vistaを導入すると、 `ndmf:NDMF` にVRM0とVRM1のプラットフォームが追加されます。

- NDMF
- UniVRM
- Ablet

`vrc:VRCAvatarDescriptor` などのコンポーネントがついておらず、以下のコンポーネントがついているアバターは、NDMFによってVRMアバターとして扱われます。

- `univrm0:VRMMeta`: VRM0.xアバター
- `univrm1:Vrm10Instance`: VRM1.0アバター 

:::info[INFO]
これらはマーカーとして機能し、必要なコンポーネントやアセットのうち、不足分はNDMFのビルド時にAvatar Tinker Vistaによって自動生成されます。

つまり、NDMFとAvatar Tinker VistaでVRMアバターを作成する限り、VRM0.xの `univrm0:VRMBlendShapeProxy` や、VRM1.0の `univrm1:Humanoid` コンポーネントを追加する必要はありません。
:::

以下のいずれかの方法で、VRM0/VRM1のアバターにNDMFプラグインによる非破壊改変を適用できます。

- Manual Bakeする（必要に応じ、生成結果をAbletコンソールからエクスポートする）
- または、NDMF ConsoleからAvatar Platformを選択し、 `Export VRM0.x Avatar with NDMF` または `Export VRM1.0 Avatar with NDMF` ボタンを押す

:::warning[WARNING]
UniVRMのUIからエクスポートを行うと、アバターが参照しているテクスチャのインポート設定がUniVRMによって変更されます。

AbletのUIからエクスポートを行った場合はテクスチャのインポート設定の変更は行われません。
:::

:::warning[WARNING]
NDMFは、Apply on Playの際にアバターをデフォルトのプラットフォームに変換しようとします。
しかし、現在のNDMFには、デフォルトのプラットフォームを選択する方法も、変換処理を行うかどうかを選択する方法もありません。
このため、**Apply on Playの際、NDMFはVRMアバターをVRChat向けアバターとして扱います。**
これが問題ないかどうかはNDMFプラグインの実装と利用目的に依存します。

シーンに置かれたVRMアバターをVRChatアバターに変換する目的でNDMFを利用する場合、Apply on PlayはVRCSDKでそのアバターをアップロードするかのように適用されます。
**この際、アバターにはNDMFによって`vrc:VRCAvatarDescriptor`が追加されます。**
（なお、Avatar Tinker VistaはVRMアバターの設定をVRChat用に変換する仕組みを提供しません。 そのようなNDMFプラグインを別途導入する必要があります。）

シーンに置かれたVRMアバターをVRMアバターとして出力する目的でNDMFを利用する場合、（特に、PlayモードでSpringBoneの揺れ具合を確認するワークフローでは）この挙動は望ましくありません。
Abletに移行することをお勧めします。
:::
