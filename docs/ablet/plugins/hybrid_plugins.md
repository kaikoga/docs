---
sidebar_position: 2
---

# Ablet NDMFハイブリッドプラグイン

Ablet NDMFハイブリッドプラグインは `ablet:Ablet` と `ndmf:NDMF` のいずれかが存在する環境で動作するプラグインです。

`ndmf:NDMF` はAblet NDMFハイブリッドプラグインを利用できます。

`ablet:Ablet` はAblet NDMFハイブリッドプラグインを利用できます。

Ablet NDMFハイブリッドプラグインが `Prefer Ablet` に対応する場合、加えて `ablet:Ablet` と `ndmf:NDMF` の両方が存在する場合にも適切に動作します。

## 制約

実装が複雑になりがちです。
おそらく、NDMFとAbletの機能を適切に読み替えたり、どちらかのみに存在する機能を適切に条件コンパイルで切り分ける必要があります。

## プラグイン制作者向け情報

Ablet NDMFハイブリッドプラグインを作る際、いくつかの考慮すべき点があります。

- AbletとNDMFの両方のプラグインがコード上で有効になっている場合、AbletとNDMFのそれぞれのタイミングで処理が実行されます。
  これで処理が２回実行されると問題があるプラグインは、処理が重複実行されないように制御を行う必要があります。
  :::tip[TIPS]
  `AbletSymbols.PreferAblet` 定数や `PREFER_ABLET` コンパイルフラグに依存するようにしておくことで、ユーザーがどちらを優先したいかを検出できます。
  自分で実装する場合、 `ativ:AvatarTinkerVista` などの実装を参考にすると良いです。
  :::
- AbletとNDMFはプラグインを定義する方法が異なります。
  例えば、Abletプラグインとしての適用時とNDMFプラグインとしての適用時でプラグインの処理順が異なる場合があります。
- NDMFまたはAbletのどちらかのみに存在する機能は注意深く利用してください。 
  - Abletは例えばVRC Expression Parameters情報の扱いをサポートせず、NDMFプレビュー相当の機能もありません。
  - 同様に、NDMFは例えばビルド中にルートオブジェクトを丸ごと置き換えることができず、Editorアセンブリを必要とします。
