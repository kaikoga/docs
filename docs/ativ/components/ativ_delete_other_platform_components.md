---
sidebar_position: 1
---

# ATiV Delete Other Platform Components

:::note[NOTE]
このコンポーネントは `ndmf:NDMF` または `ablet:Ablet` を通してのみ機能します。
:::

異なるプラットフォーム向けのコンポーネントを全て削除します。

- アバターがVRChat向けではない場合、アバターに含まれる `VRC.SDK3.*` パッケージのコンポーネントを全て削除します。
- アバターがVRM0.x向けではない場合、アバターに含まれる `VRM.*` パッケージのコンポーネントを全て削除します。
- アバターがVRM1.0 向けではない場合、アバターに含まれる `UniVRM10.*` パッケージのコンポーネントを全て削除します。

## 役に立つ状況

NDMFを利用してVRChat用アバターに衣装アセットを着せ替えているものをVRMに変換したいときに便利です。

例えば、以下のような場面で便利です。

- VRMアバター用にVRChat用の衣装プレハブを着せたいが、とりあえず揺れものは無視して着せたい。
- VRChat用の衣装プレハブをATiVでVRM用に変換する上で、元のプレハブから `vrc:VRCAvatarDescriptor` や `vrc:VRCPhysBone` コンポーネントを削除する必要がある。

:::tip[TIPS]
このコンポーネントはNDMFのResolvingフェーズで動作します。
:::

## 使い方

アバター内の任意の場所にコンポーネントを追加してください。

`Ndmf Detect Platform` を有効にしてNDMFビルド対象のプラットフォームを検知するか、 `Ndmf Detect Platform` を無効にした上で `Platform` から対象のプラットフォームを指定してください。

:::warning[WARNING]
このコンポーネントで `vrc:VRCAvatarDescriptor` を削除した場合、 `vrc:VRCAvatarDescriptor` の存在を期待するNDMFプラグインが正常に動作しなくなります。

具体的には、コンポーネントのプラットフォームがVRChat以外の状態で、NDMFのVRChatターゲットのビルドを行わないでください。
:::

