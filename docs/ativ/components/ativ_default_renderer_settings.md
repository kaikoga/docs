---
sidebar_position: 1
---

# ATiV Default Renderer Settings

:::note[NOTE]
このコンポーネントは `ndmf:NDMF` または `ablet:Ablet` を通してのみ機能します。
:::

コンポーネントの子にある `MeshRenderer` や `SkinnedMeshRenderer` の `Anchor Override` 、 `RootBone` 、 `Bounds` を設定します。

## 役に立つ状況

`ma:ModularAvatarMeshSettings` や `vrcf:AnchorOverrideFix` 、 `vrcf:BoundingBoxFix` をある程度置き換えます。

VRChat想定衣装アセットを非VRChatプロジェクトで扱う際に便利です。


## 使い方

アバター内の任意の場所にコンポーネントを追加した後、 `Setup` ボタンを押すと無難な設定が行われます。
