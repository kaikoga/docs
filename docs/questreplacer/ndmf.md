---
sidebar_position: 22
---

# NDMF対応

NDMFのインストールされた環境では、QuestReplacerは非破壊改変ツールとして振る舞います。

## 前提条件

アバターの子に存在する `uc:QuestReplacer` コンポーネントに限り、NDMF対応の動作を行います。

:::tip[TIPS]
`uc:QuestReplacer` コンポーネントには特定のアバターセットアップについての設定が記録されます。
そのため、 `uc:QuestReplacer` のプレハブを作って複数のアバターにつける使い方は動作しますが、推奨されません。

シーン上にアバターを構築するワークフローでは、 `uc:QuestReplacer` はアバターのプレハブに含めず、シーン上でコンポーネントを追加した状態にする想定です。
`uc:QuestReplacer` をアバターのプレハブに含めても動作しますが、推奨されません。

Prefab Variantを使う場合は、元のアバターに対してではなく、それぞれのアバターのバリアントに対して `uc:QuestReplacer` を追加するようにすると良いです。
`uc:QuestReplacer` を元のアバターに含めても動作しますが、推奨されません。
:::

## できること

QuestReplacerはNDMFプレビューに対応します。

QuestReplacerはVRChat向けアバターのApply on Playに対応します。

## NDMFでできること

NDMFの非破壊改変時に限り、AnimationControllerアセットに含まれるAnimation Clipの置き換えや、Animation Clipアセットに含まれるマテリアル変更アニメーションに対してマテリアルの置き換えを適用できます。

更に、 `Material` の `Collect` ボタンはAnimation Clipに含まれるマテリアルを抽出します。

:::info[INFO]
NDMFの非破壊改変ではない場合、アバターが直接参照しているAnimation Clipのみが置き換えられ、Animation Clip自体は変更されません。
:::

## できないこと

[Avatar Tinker VistaのNDMF VRM0+1サポート](../ativ/ndmf/vrm_support.md) を適用した環境でApply on Playを行うと、VRMアバターがVRChatとして扱われるため、VRM向けのマテリアル差し替えが適用されません。

対処方法はリンク先を参照してください。

