---
sidebar_position: 1
---

# Sourceとは

Emote Wizardの出力内容を追加するコンポーネントについて説明します。

## Emote Item Source 系の覚え方

| アニメーションの | 細かく設定できる方 | VRMでも使える方 |
| -- | -- | -- |
| 再生条件 | Emote Item Source     | Generic Emote Item Source     |
| 再生内容 | Emote Sequence Source | Generic Emote Sequence Source |

## Emote Sequence Source 系の自動検出

Emote Item Source 系コンポーネントと Emote Sequence Source 系コンポーネントを同じGameObjectに付与する必要はなく、 Emote Sequence Source を親または子につけても大丈夫です。

### 同じGameObjectに付与する場合

- Emote Item Source + Emote Sequence Source

特徴：ハンドサインと表情が一対一関係にある時にまとめて編集できるのでわかりやすいです。

:::note[NOTE]
VRChatのデフォルトSourceはこっちの構造になっています。
:::

### Emote Item Source を親にする場合

- Emote Item Source
  - Emote Sequence Source

特徴：どのハンドサインでどの表情を出すかの設定を柔軟に変更できます。

### Emote Sequence Source を親にする場合

- Emote Sequence Source
  - Emote Item Source
  - Emote Item Source

特徴：同じ表情を複数の条件で使いまわしやすいです。

:::note[NOTE]
VRMのデフォルトSourceはこっちの構造になっています。
:::
