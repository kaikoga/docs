---
sidebar_position: 2
---

# アバターツールについて

以下のツールがアバターツールに該当します。

- Emote Wizard
- Avatar Tinker Vista
- QuestReplacer
- NuguminTool

## 具体的に、どんなワークフローを想定してるの？

BOOTHで購入したVRChat向け衣装アセットを着せ替えたアバターをPCに加えてQuestとVRMに出力しています。

こんなことをしています。

### VRChat PC向けアバターを作るまで

- NuguminToolでアバターを素体と衣装に分割する
- 素体と衣装のPrefab Variantを作る
- 素体のPrefab Variantに対してEmoteWizardを設定し、表情やエモートを設定する
- 新しいシーンを作り、素体と衣装をModular Avatarで結合する
  - 衣装のPrefab VariantはModular Avatarの設定を行う
  - その際、衣装側の切り替えアニメーションはEmoteWizardで追加する
- AvatarOptimizerで最適化する
- 普通にアップロードする

### それをQuest対応する

- 素体と衣装のPrefab Variantを作る
- 新しいシーンを作り、素体と衣装をModular Avatarで結合する
- QuestReplacerでマテリアルを差し替える
- AvatarOptimizerで最適化されているはずなのでPhysBone以外は大丈夫だが、
  PhysBoneはどうしようもないので、ATiV Delete All Physbonesまたは手動で削除する
- 普通にアップロードする

### ここからVRMに出力する

- 素体と衣装のPrefab Variantを作る
- 素体と衣装をVRMとして設定し直す
- 新しいシーンを作り、素体と衣装をModular Avatarで結合する
- QuestReplacerでマテリアルを差し替える
- Manual Bake Avatarして普通にVRMエクスポートする

### ここまでできたものに対し、VRChat向け衣装アセットを着せ替える

- VRChatのPC版アバターはModular Avatarで普通に着せ替えてアップロードする
- 衣装アセットのPrefab Variantを作り、PhysBoneを全部抜く
- QuestReplacerでマテリアルを差し替えてQuestアップロードする
- 衣装アセットのPrefab Variantを作り、SpringBoneを設定する
- QuestReplacerでマテリアルを差し替えてVRM出力する

## 質問コーナー

- Q. わざわざ分割してから結合するの？
  - A. 主に好みの問題ですが、いくつかの理由があります
    - 衣装アセットを着せる際に素体のデフォルト衣装を毎回消すのが大変なのでそうしています
    - 共通素体アバターのデフォルト衣装を移植することがあります
    - デフォルト衣装と衣装アセットの扱いが一緒になるのが個人的に楽です
- Q. Quest版でPhysBoneを全部抜くの？
  - A. ボーン構成上Quest制限に納めるように残すのが難しそうでした
- Q. VRM出力をしているようですが、アレとかコレに機能が足りないのでは？
  - A. 鋭意開発中です
