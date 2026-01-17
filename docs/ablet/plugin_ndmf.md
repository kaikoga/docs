---
sidebar_position: 101
---

# NDMF専用プラグイン

NDMF専用プラグインはNDMFのみを想定したプラグインです。

NDMFはNDMF専用プラグインを利用できます。

AbletはNDMF専用プラグインを互換動作で適用できます。

## 制約

AbletがNDMF専用プラグインと協調動作する場合はNDMFに依存します。
このため、NDMF専用プラグインをAbletから利用する場合もUnity 2022以上とNDMFが依存するDLLが必要になります。

## NDMF on Ablet

`NDMF on Ablet` を有効にすると、Abletのビルド時にNDMFのパスが適用されるようになります。

- Apply on PlayやVRCSDKのビルド時コールバックはAbletによって起動され、AbletからNDMFが呼び出されます。
- NDMFのビルドエラーはNDMFのコンソールに、AbletのビルドエラーはAbletのコンソールに出力されます。
- Manual ApplyはAbletのメニューから行ってください。
  :::warning[WARNING]
  NDMFのManual Bakeを行った場合、Abletプラグインは適用されません。
  :::

:::tip[TIPS]
`NDMF on Ablet` は実験的な設定です。

NDMFのある環境では、ほとんどの場合、代わりに `Ablet on NDMF` を有効にしてNDMFプラグインとして実行した方が問題が起きにくいです。
:::

:::info[INFO]
技術的な理由から、NDMFのApply On PlayとNDMF on Abletは組み合わせて利用できません。

NDMF on Abletを有効にする場合は、NDMFのApply on Playをオフにした上で、必要に応じてAbletのApply On Playをオンにしてください。
:::

:::note[NOTE]
これは、NDMFのApply on Playの実装方法に由来します。

NDMFのApply on PlayはVRChatアバターに対してはVRCSDKのビルド前コールバックを呼び出すため、Abletで処理を上書きすることが可能です。

しかし、NDMFのApply on Playは非VRChatアバターに対しては直接NDMFのApply on Playを呼び出すため、Abletからフックすることができません。

そもそもNDMFとAbletでアバターのプラットフォームの定義やプラットフォームの概念そのものが異なり、エッジケースが多すぎるため、一律で無効としています。
:::

