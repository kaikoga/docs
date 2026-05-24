---
sidebar_position: 1
---

# ATiV Overwrite Visemes

<PlatformBadge id="VRChat" />
<PlatformBadge id="UniVRM0" />
<PlatformBadge id="UniVRM1" />
<PlatformBadge id="ChilloutVR" />
<PlatformBadge id="Basis" />

:::note[NOTE]
このコンポーネントは `ndmf:NDMF` または `ablet:Ablet` を通してのみ機能します。
:::

アバターのメタデータの一部を上書きし、リップシンクを設定します。

:::warning[WARNING]
`ew:EmoteWizard` はVRM0.xおよびVRM1.0のリップシンクを生成できますが、 `ativ:AtivOverwriteVisemes` とは競合します。

**Emote Wizard と `ativ:AtivOverwriteVisemes` の両方でリップシンクを設定している場合、どちらが優先されるかは未定義です。**

以下のいずれかを選んでください。

- Emote Wizard でリップシンクを生成する
  - `ativ:AtivTargetNdmfPlatform` や `ativ:AtivTargetAbletPlatform` を利用して、VRMに出力する場合に `ativ:AtivOverwriteVisemes` を取り除いてください。
- `ativ:AtivOverwriteVisemes` でリップシンクを設定しない
  - Emote Wizardの設定からリップシンクに関する `ew:GenericEmoteItemSource` を取り除いてください。
- （または、両方で同じ設定をすることで、同じ設定で上書きされるようにする）
:::

## 使い方

アバター内の任意の場所にコンポーネントを追加してください。
