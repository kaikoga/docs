---
sidebar_position: 22
---

# NDMF / Ablet対応

`ndmf:NDMF` または `ablet:Ablet` のインストールされた環境では、QuestReplacerは非破壊改変ツールとして振る舞います。

## 前提条件

アバターの子に存在する `qr:QuestReplacer` コンポーネントに限り、NDMFまたはAblet対応の動作を行います。

:::tip[TIPS]
`qr:QuestReplacer` コンポーネントには特定のアバターセットアップについての設定が記録されます。
そのため、 `qr:QuestReplacer` のプレハブを作って複数のアバターにつける使い方は動作しますが、推奨されません。

シーン上にアバターを構築するワークフローでは、 `qr:QuestReplacer` はアバターのプレハブに含めず、シーン上でコンポーネントを追加した状態にする想定です。
`qr:QuestReplacer` をアバターのプレハブに含めても動作しますが、推奨されません。

Prefab Variantを使う場合は、元のアバターに対してではなく、それぞれのアバターのバリアントに対して `qr:QuestReplacer` を追加するようにすると良いです。
`qr:QuestReplacer` を元のアバターに含めても動作しますが、推奨されません。
:::

## できること

非破壊改変時に限り、QuestReplacerはAnimationControllerアセットに含まれるAnimation Clipの置き換えや、Animation Clipアセットに含まれるマテリアル変更アニメーションに対してマテリアルの置き換えを適用できます。

更に、 `Material` の `Collect` ボタンはAnimation Clipに含まれるマテリアルを抽出します。

:::info[INFO]
非破壊改変ではない場合、アバターが直接参照しているAnimation Clipのみが置き換えられ、Animation Clip自体は変更されません。
:::

## NDMFでできること

QuestReplacerはNDMFプレビューに対応します。

QuestReplacerはVRChat向けアバターのApply on Playに対応します。

## Abletでできること

QuestReplacerはAbletのEnhance Inplace Previewに対応します。

QuestReplacerはApply on Playに対応します。
