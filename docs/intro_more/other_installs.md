---
sidebar_position: 10
---

# その他のインストール方法

推奨されないインストール方法について説明します。

## UPM gitパッケージをインストール（オプション）

Unity標準のPackage Managerからパッケージを個別にインストールすることも可能です。

以下のURLを メニューバー→ `Window` → `Package Manager` → `+` → `Add package from git URL...` するか、 `Packages/manifest.json` に追記してください。

### ATiV Suite

- https://github.com/kaikoga/AtivSuite-Unity.git#v2.0.0

```
"net.kaikoga.ativ.suite": "https://github.com/kaikoga/AtivSuite-Unity.git#v2.0.0",
```

:::info[INFO]
ATiV Suiteをインストールすることで、以下のパッケージの多くが依存関係としてインストールされます。
:::

#### Emote Wizard

- https://github.com/kaikoga/EmoteWizard-Unity.git#v2.0.0

```
"net.kaikoga.emotewizard": "https://github.com/kaikoga/EmoteWizard-Unity.git#v2.0.0",
```

#### Avatar Tinker Vista + AdLib + Ablet

- https://github.com/kaikoga/AvatarTinkerVista-Unity.git#v2.0.0
- https://github.com/kaikoga/AdLib-Unity.git#v2.0.0
- https://github.com/kaikoga/Ablet-Unity.git#v2.0.0

```
"net.kaikoga.ativ": "https://github.com/kaikoga/AvatarTinkerVista-Unity.git#v2.0.0",
"net.kaikoga.adlib": "https://github.com/kaikoga/AdLib-Unity.git#v2.0.0",
"net.kaikoga.ablet": "https://github.com/kaikoga/Ablet-Unity.git#v2.0.0",
```

#### Avatar Ranker Vista

- https://github.com/kaikoga/AvatarRankerVista-Unity.git#v2.0.0

```
"net.kaikoga.arv": "https://github.com/kaikoga/AvatarRankerVista-Unity.git#v2.0.0",
```

#### QuestReplacer

- https://github.com/kaikoga/QuestReplacer-Unity.git#v2.0.0

```
"net.kaikoga.questreplacer": "https://github.com/kaikoga/QuestReplacer-Unity.git#v2.0.0",
```

### NuguminTool

- https://github.com/kaikoga/Modularizer-Unity.git?path=/Modularizer/Packages/net.kaikoga.modularizer#v1.0.0

```
"net.kaikoga.modularizer": "https://github.com/kaikoga/Modularizer-Unity.git?path=/Modularizer/Packages/net.kaikoga.modularizer#v1.0.0",
```

## BOOTHからインストール（非推奨）

BOOTH https://kaikoga.booth.pm/

BOOTHにunitypackageが置いてあるかもしれませんが、BOOTHからのインストールはもはや推奨されません。

