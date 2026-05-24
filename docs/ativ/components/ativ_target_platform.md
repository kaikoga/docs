---
sidebar_position: 1
---

# ATiV Target Platform

<PlatformBadge id="Any" />

:::note[NOTE]
このコンポーネントは `ndmf:NDMF` または `ablet:Ablet` を通してのみ機能します。
:::

一部のプラットフォームのみに適用したいオブジェクトに付与することで、他のプラットフォームのビルドから除外します。

:::note[NOTE]
`ativ:AtivTargetPlatform` には「基本的な設定が行われたアバターに対して、プラットフォーム特有の機能を付加する」という思想があります。
「全ての機能を盛り込んだアバターを作って、プラットフォームごとに非対応の機能を取り除く」という目的にも利用できますが、そのためのコンポーネントではありません。
:::

## バリエーション

プラットフォーム判定の異なるいくつかのコンポーネントがあります。

## `ATiV Target Unity Platform` {#unity}

Unity のビルドプラットフォームを指定します。

:::info[INFO]
`ativ:AtivTargetUnityPlatform` で指定するプラットフォームは、Unityのビルドプラットフォームです。
:::

## `ATiV Target NDMF Platform` {#ndmf}

`ndmf:NDMF` のプラットフォームを指定します。

:::info[INFO]
`ativ:AtivTargetNdmfPlatform` で指定するプラットフォームは、NDMFのアバタープラットフォームです。
:::

## `ATiV Target Ablet Platform` {#ablet}

`ablet:Ablet` のプラットフォームを指定します。

:::info[INFO]
`ativ:AtivTargetAbletPlatform` で指定するプラットフォームは、Abletのアバタープラットフォームです。
:::

## `ATiV Target Ablet Subplatform` {#ablet_sub}

`ablet:Ablet` のサブプラットフォームを指定します。

:::info[INFO]
`ativ:AtivTargetAbletSubplatform` で指定するプラットフォームは、Abletのサブプラットフォームです。
:::

## `ATiV Target Selected Dynamics Platform` {#selected_dynamics}

`ativ:AtivSelectDynamics` で指定された出力先の揺れもの設定をプラットフォームとして指定します。

:::info[INFO]
`ativ:AtivSelectDynamics` の指定のみが考慮されます。
アバターに含まれるその他の揺れものは考慮されません。
:::

## 役に立つ状況

１つのアバタープレハブから複数のプラットフォームに出力する際に便利です。

:::tip[TIPS]
VRChatの複数アバタープラットフォーム対応のつもりで読んでいる場合、おそらく `ativ:AtivTargetUnityPlatform` または `ativ:AtivTargetAbletSubplatform` が便利です。
:::

:::tip[TIPS]
複数ソーシャルVRプラットフォーム対応のつもりで読んでいる場合、おそらく `ativ:AtivTargetNdmfPlatform` `ativ:AtivTargetAbletPlatform` または `ativ:AtivTargetAbletSubplatform` が便利です。
:::

## 使い方

アバター内の任意の場所にコンポーネントを追加してください。

このコンポーネントには２種類の動作モードがあります。

- `ゲームオブジェクト` : 選択されていないプラットフォームでは、GameObject自体（と、その子孫）を削除します。
- `コンポーネント` : 選択されていないプラットフォームでは、GameObjectに追加されているコンポーネントを削除します。
  コンポーネントはスクリプト上の名前で指定します。
