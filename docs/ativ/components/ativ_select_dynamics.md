---
sidebar_position: 1
---

# ATiV Select Dynamics

<PlatformBadge id="Any" />

`ativ:AtivGenerateDynamics` の挙動をデフォルトから変更して、揺れものの定義コンポーネントから異なる揺れもの実装を出力します。

このコンポーネントがアバター以下に存在しない場合、 `ativ:AtivGenerateDynamics` はデフォルトの揺れものを生成します。

## 役に立つ状況

複数の揺れものに対応しているプラットフォームで、揺れものの実装を選ぶ際に便利です。

## 使い方

アバター内の任意の場所にコンポーネントを追加して、 `揺れもの実装` を選択してください。

- `Auto` : 自動選択（コンポーネント省略時と同じ挙動）。
- `Discard` : 揺れものを生成しない。
