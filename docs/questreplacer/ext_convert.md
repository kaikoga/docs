---
sidebar_position: 25
---

# 拡張コンバート

特定のパッケージがインストールされた環境では、QuestReplacerはマテリアル生成の際にそれらのライブラリを利用することを試みます。

`Material Generation Mode` の `Ext Convert ...` シリーズを選択している場合、マテリアル生成の際に、拡張コンバートを行います。
拡張コンバートでは通常のマテリアル生成と比べて、より見た目の近いマテリアルに変換されやすくなります。

:::warning[WARNING]
拡張コンバートは外部ライブラリの非公開APIを利用していることがあるため、更新に伴い動かなくなることが予想されます。

`Material Generation Mode` の `Generate ...` シリーズを使うことで、拡張コンバート機能を無効化できます。
その場合、生成されたマテリアルに対して手作業で見た目の調整を行う必要があります。
:::

## UniVRM

UniVRMがインストールされている環境では、VRM0.x用のMToonマテリアルをVRM1.0のMToonマテリアルに拡張コンバートする際、UniVRMの定義に従った変換を行います。 

## lilToon

lilToonとUniVRMがインストールされている環境では、lilToonマテリアルをVRM0.xまたはVRM1.0のMToonマテリアルに拡張コンバートする際、lilToonの機能を利用しようとします。

## VRC Quest Tools

VRC Quest Toolsがインストールされている環境では、任意のマテリアルをVRChat Mobile向けに拡張コンバートする際、VRC Quest Toolsの機能を利用しようとします。
