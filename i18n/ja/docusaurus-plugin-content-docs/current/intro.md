---
sidebar_position: 1
---

# これはなに？

kaikogaが作ったいろんなツールのドキュメント置き場です。

（ツールが増えすぎた上、複数を組み合わせて使うことが前提っぽくなってきているので、１つの場所にまとめることにしました。）

# 入手方法

## VCCからインストール

VRChatユーザーはVCCを利用するのが簡単です。
<a href="vcc://vpm/addRepo?url=https%3A%2F%2Fvpm.kaikoga.net%2Findex.json">VCC に vpm.kaikoga.net を追加する</a>

VCC でインストールする場合、 VCC からアップデートを適用できます。

VPM置き場： https://vpm.kaikoga.net/

VPMリポジトリURL（コマンドライン・互換ツール用）： https://vpm.kaikoga.net/index.json

## GitHubからインストール

非VRChatユーザーはUnity標準のPackage Managerを利用してください。

以下のURLを 「Window」 → 「Package Manager」 → 「+」 → 「Add package from git URL...」 するか、 manifest.json に追記してください。

### Emote Wizard

- https://github.com/kaikoga/EasyModeAvatar-Unity.git#v0.99.1

```
"net.kaikoga.emotewizard": "https://github.com/kaikoga/EasyModeAvatar-Unity.git#v0.99.1",
```

### Avatar Tinker Vista + AdLib

- https://github.com/kaikoga/AvatarTinkerVista-Unity.git#v0.2.0
- https://github.com/kaikoga/AdLib-Unity.git#v0.1.0

```
"net.kaikoga.ativ": "https://github.com/kaikoga/AvatarTinkerVista-Unity.git#v0.2.0",
"net.kaikoga.adlib": "https://github.com/kaikoga/AdLib-Unity.git#v0.1.0",
```

### QuestReplacer

- https://github.com/kaikoga/QuestReplacer-Unity.git?path=/QuestReplacer/Packages/net.kaikoga.questreplacer#v0.2.1

```
"net.kaikoga.questreplacer": "https://github.com/kaikoga/QuestReplacer-Unity.git?path=/QuestReplacer/Packages/net.kaikoga.questreplacer#v0.2.1",
```

### NuguminTool

- https://github.com/kaikoga/Modularizer-Unity.git?path=/Modularizer/Packages/net.kaikoga.modularizer#v1.0.0

```
"net.kaikoga.modularizer": "https://github.com/kaikoga/Modularizer-Unity.git?path=/Modularizer/Packages/net.kaikoga.modularizer#v1.0.0",
```

## BOOTH からインストール（非推奨）

BOOTH https://kaikoga.booth.pm/

BOOTHのパッケージは古いことがあります。
安定版が出ていないツールはBOOTHに置かれていないこともあります。

そこになければないですね。

## 質問コーナー

- Q. KogapenやKogastatsのドキュメントは？
  - A. ちょっと待って・・・
- Q. MeshWeaverのドキュメントは？
  - A. ジャンルが違うので、 https://kaikoga.github.io/MeshWeaver-unity/docs/ja/ を見てください。 
