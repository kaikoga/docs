---
sidebar_position: 9999
---

# 内部仕様

## Emote Wizardが管理するアセット

**Emote WizardはAnimator Controllerを自動生成します。**  
独自のAnimator Controllerを提供するアバターや、破壊的にAnimator Controllerのステートマシンを編集して機能を追加するタイプのツールとは相性が良くないと思います。

**Emote WizardはExpression Menu、Expression Parameterを自動生成します。**  
全てのアニメーションパラメータはEmote Wizardで管理する必要があります。
他のアセットで利用するパラメータはParameter Wizardなどから設定することもできますが、上級者向けとなります。

なお、NDMFのプラグインとしてのEmote WizardはGeneratingフェーズで動作するため、Transformingフェーズでアバターに機能を追加するギミックアセット（例えば、Modular Avatar設定済みアクセサリ）は特に何もしなくても併用が可能だと思います。
この場合はおそらくExpression Parameterの設定も不要です（外部アセットの設定がマージされるため）。

## Emote Wizardの設定方法

**Expression Menuの項目名をスラッシュ区切りで入力することによって、自動的にサブフォルダが作成されます。**  

## Emote Wizardが生成するアセットの仕様

**アニメーションのWrite Defaultsはオフとなります。**  
Emote Wizardは、Write Defaultsがオフの状態で再生終了したアニメーションのシェイプキーが元の値に戻るように、リセット用のアニメーションクリップを自動生成します。
これにはAvatar Wizardにセットしたアバターの現在の値が使われます。

例１：
- シーン上でシェイプキーの値が0
- 表情アニメーションによってシェイプキーの値を50に変更
- 表情アニメーション終了時、シェイプキーの値は0に戻る

例２：
- シーン上で服を着ている（GameObjectがアクティブ）
- 着せ替えトグルアニメーションによって服を脱ぐ（GameObjectがアクティブではなくなる）
- 着せ替えトグルアニメーション終了時、GameObjectはアクティブに戻る

WDオンを期待する外部のギミック・アニメーションアセットと併用する場合はギミックの改修が必要になるでしょう。

**アニメーションのVRCAnimatorTrackingControlはEmote Wizardが管理します。**  
いわゆるまばたき固定・リップシンク固定に相当する機能です。
Tracking Overrideが有効なアニメーションを再生中は `Animation` にセットされ、再生完了すると `Tracking` に戻るようにアニメーションが構築されます。
これは完璧ではないので、複数のレイヤーで同じ部位に対してTracking Overrideを設定した場合、固定が意図せず解除される場合があります。
**特に、Action Layerにセットされるエモートは `Eyes` と `Mouth` 以外の全てのトラッキングを固定し、再生完了後に解除します。**
このため、Tracking Overrideについて `Eyes` と `Mouth` 以外の設定は可能ですが、推奨されません。

なお、実はデフォルトのBase LayerにもVRCAnimatorTrackingControlが存在するため、ロコモーション移動とEmote WizardによるActionエモートでトラッキング制御が干渉します。
これは現時点では仕様です（どうしようもありません）。
