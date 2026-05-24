---
sidebar_position: 1
---

# Ablet Select Subplatform

<PlatformBadge id="Unity" />

`ablet:AbletSelectSubplatform` はビルド時に推定されるサブプラットフォームを上書きします。

サブプラットフォームに応じて一部のAbletプラグインの挙動が切り替わることがあります。

## 役に立つ状況

- PCとMobileで異なる非破壊編集処理が適用されるように構築されたVRChat向けアバターで、PC向けにビルドする際に強制的にMobileの設定を適用できます。
- `UniVRM VRM1 cluster` サブプラットフォームに出力する際に追加の最適化を行うような設定ができます。

## 使い方

アバター内の任意の場所にコンポーネントを追加してください。

### 使える状況

サブプラットフォームを指定せずにAbletのビルドを実行した場合、サブプラットフォームが推定されます。

:::tip[TIPS]
例えば、以下の場合にサブプラットフォームが推定されます。

- VRChatでは、現在のUnityのビルドプラットフォームに対応するサブプラットフォームが推定されます。
- Ablet Console Windowや `ativ:AtivExportAvatarUI` からアバターをファイルに書き出す際、 `VRM1.0 アバターをエクスポート...` など、プラットフォームへのエクスポートを選択した場合
:::

### 無視される状況

サブプラットフォームを指定してビルドした場合、 `ablet:AbletSelectSubplatform` は無視され、指定されたサブプラットフォームが適用されます。

:::tip[TIPS]
例えば、以下の場合にサブプラットフォームを指定したビルドが実行されます。

- Ablet Console Windowや `ativ:AtivExportAvatarUI` からアバターをファイルに書き出す際、 `Hatracker .hatom` など、サブプラットフォームへのエクスポートを選択した場合
:::

また、アバターの出力先プラットフォームが一致しない場合、 `ablet:AbletSelectSubplatform` は無視されます。

:::tip[TIPS]
例えば、UniVRM VRM1.0のアバターを出力する際、 `VRChat Android` サブプラットフォームの指定は無視されます。
:::
