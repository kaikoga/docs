---
sidebar_position: 1
---

# NDMF VRM0+1サポート

NDMFとUniVRMのある環境にAvatar Tinker Vistaを導入すると、NDMFにVRM0とVRM1のプラットフォームが追加されます。 

:::tip[TIPS]
unitypackageでインストールされたUniVRMをAvatar Tinker Vistaを利用して検出する方法については、 [ATIV_DETECTED](../script/ativ_detected) を参照してください。
:::

`uc:VRCAvatarDescriptor` などのコンポーネントがついておらず、以下のコンポーネントがついているアバターは、NDMFによってVRMアバターとして扱われます。

- `uc:VRMMeta`: VRM0.xアバター
- `uc:Vrm10Instance`: VRM1.0アバター 

:::info[INFO]
これらはマーカーとして機能し、必要なコンポーネントやアセットのうち、不足分はNDMFのビルド時にAvatar Tinker Vistaによって自動生成されます。

つまり、NDMFとAvatar Tinker VistaでVRMアバターを作成する限り、VRM0.xの `uc:VRMBlendShapeProxy` や、VRM1.0の `uc:Humanoid` コンポーネントを追加する必要はありません。
:::

以下のいずれかの方法で、VRM0/VRM1のアバターにNDMFプラグインによる非破壊改変を適用できます。

- Manual Bakeする（必要に応じ、生成結果をUniVRMでエクスポートする）
- または、NDMF ConsoleからAvatar Platformを選択し、 `Export VRM0.x Avatar with NDMF` または `Export VRM1.0 Avatar with NDMF` ボタンを押す

:::warning[WARNING]
NDMFは、Apply on Playの際にアバターをデフォルトのプラットフォームに変換しようとします。
しかし、現在のNDMFには、デフォルトのプラットフォームを選択する方法も、変換処理を行うかどうかを選択する方法もありません。
このため、**Apply on Playの際、NDMFはVRMアバターをVRChat向けアバターとして扱います。**
これが問題ないかどうかはNDMFプラグインの実装と利用目的に依存します。

シーンに置かれたVRMアバターをVRChatアバターに変換する目的でNDMFを利用する場合、Apply on PlayはVRCSDKでそのアバターをアップロードするかのように適用されます。
**この際、アバターにはNDMFによって`uc:VRCAvatarDescriptor`が追加されます。**
（なお、Avatar Tinker VistaはVRMアバターの設定をVRChat用に変換する仕組みを提供しません。 そのようなNDMFプラグインを別途導入する必要があります。）

シーンに置かれたVRMアバターをVRMアバターとして出力する目的でNDMFを利用する場合、（特に、PlayモードでSpringBoneの揺れ具合を確認するワークフローでは）この挙動は望ましくありません。\
[Avatar Tinker Vista - ApplyOnPlayHack](../../ativ_applyonplayhack/index.md) を導入してください。
:::
