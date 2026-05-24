---
sidebar_position: 110
---

# NDMFサポート

`ndmf:NDMF` の存在する環境では、AbletはNDMFと協調して動作します。

:::warning[WARNING]
AbletとNDMFを連携させたことによる不具合があった場合、それはAbletまたはプラグインの問題です。

NDMFに問い合わせないでください。
:::

## NDMF連携機能

NDMF環境、またはAblet環境において、これらのプラグインを共存させるためのいくつかの追加機能が提供されます。

`Ablet on NDMF` または `NDMF on Ablet` のどちらかを有効にすることで、Ablet専用プラグインまたはNDMF専用プラグインを、もう片方で使えるようにします。
`Prefer Ablet` はAbletとNDMFの両方に対応するプラグインの挙動を制御します。

デフォルトでは、 `Ablet on NDMF` が有効です。

:::info[INFO]
`Ablet on NDMF` と `NDMF on Ablet` で、プラグインの適用順序は一致しません。
出力結果が変わったり、一部のプラグインが動作しなくなることがあります。
:::

:::warning[WARNING]
`Ablet on NDMF` と `NDMF on Ablet` のどちらも有効にしていない状態でAbletとNDMFを併用した場合、プラグインの処理順は未定義になります。
例えば、ビルドのたびに出力結果が変化する可能性があります。
:::

### Ablet on NDMF

`Ablet on NDMF` を有効にすると、NDMFのビルド時にAbletのレイヤーが適用されるようになります。
**NDMFプラグインをメインで利用しているプロジェクトにAblet専用プラグインを追加したい場合に推奨される設定です。**

Abletのフェーズは対応するNDMFのフェーズの一部として実行されるようになります。

- Apply on PlayやVRCSDKのビルド時コールバックはNDMFによって起動され、NDMFからAbletが呼び出されます。
- AbletのビルドエラーはNDMFのコンソールに統合されて出力されます。
- Manual BuildはNDMFのメニューから行ってください。\
  **AbletのManual Applyを行った場合、NDMFプラグインは適用されません。**

### NDMF on Ablet

`NDMF on Ablet` を有効にすると、Abletのビルド時にNDMFのパスが適用されるようになります。
**Abletプラグインをメインで利用しているプロジェクトにNDMF専用プラグインを追加したい場合に推奨される設定です。**

NDMFのフェーズは対応するAbletのフェーズの一部として実行されるようになります。

- Apply on PlayやVRCSDKのビルド時コールバックはAbletによって起動され、AbletからNDMFが呼び出されます。
- NDMFのビルドエラーはNDMFのコンソールに、AbletのビルドエラーはAbletのコンソールに出力されます。
- Manual ApplyはAbletのメニューから行ってください。\
  **NDMFのManual Bakeを行った場合、Abletプラグインは適用されません。**

:::tip[TIPS]
既に多くのNDMFプラグインを利用している環境では、ほとんどの場合、代わりに `Ablet on NDMF` を有効にしてAbletをNDMFプラグインとして実行した方が問題が起きにくいです。

`NDMF on Ablet` を利用する場合、NDMFプラグインの実行順が変化する場合があります。
:::

:::info[INFO]
技術的な理由から、NDMFのApply On Playと `NDMF on Ablet` は組み合わせて利用できません。

`NDMF on Ablet` を有効にする場合は、NDMFのApply on Playをオフにした上で、必要に応じてAbletのApply On Playをオンにしてください。
:::

:::note[NOTE]
これは、NDMFのApply on Playの実装方法に由来します。

NDMFのApply on PlayはVRChatアバターに対してはVRCSDKのビルド前コールバックを呼び出すため、Abletで処理を上書きすることが可能です。

しかし、NDMFのApply on Playは非VRChatアバターに対しては直接NDMFのApply on Playを呼び出すため、Abletからフックすることができません。

そもそもNDMFとAbletでアバターのプラットフォームの定義やプラットフォームの概念そのものが異なり、エッジケースが多すぎるため、一律で無効としています。
:::

### Prefer Ablet

`Prefer Ablet` はAblet NDMFハイブリッドプラグインの挙動を制御します。
Ablet NDMFハイブリッドプラグインはAbletとNDMFのいずれかがあれば動作しますが、 `Ablet on NDMF` や `NDMF on Ablet` と組み合わせた時にどのように動作すれば良いかが問題になります。

`Prefer Ablet` をオフにすると、Ablet NDMFハイブリッドプラグインはNDMFプラグインとして実行するようリクエストされます。\
Ablet NDMFハイブリッドプラグインはNDMFの実行順で実行されます。

`Prefer Ablet` をオンにすると、Ablet NDMFハイブリッドプラグインはAbletプラグインとして実行するようリクエストされます。\
Ablet NDMFハイブリッドプラグインはAbletの実行順で実行されます。

:::tip[TIPS]
既に多くのNDMFプラグインを利用している環境では、ほとんどの場合、 `Prefer Ablet` をオフにしてAblet NDMFハイブリッドプラグインをNDMFプラグインとして実行した方が問題が起きにくいです。

`Prefer Ablet` を利用する場合、NDMFプラグインの実行順が変化する場合があります。
:::

