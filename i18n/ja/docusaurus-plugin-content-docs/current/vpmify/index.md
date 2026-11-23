---
sidebar_position: 1
---

import VpmifyIcon from './img/vpmify.svg';

# Vpmify

<AiGeneratedBadge />

<VpmifyIcon title="Vpmify" width={128} height={128} />

Vpmifyは、VPMパッケージ以外のものをVCCや `alcom:ALCOM` で扱えるようにするツールです。

Vpmifyを使うと、以下のパッケージをレシピに従ってALCOMのユーザーパッケージに登録できます。

- UPMパッケージ
- GitHubに公開されているgit UPMパッケージ

## 入手方法

[GitHubのReleases](https://github.com/kaikoga/vpmify/releases) で入手してください。

GitHub: https://github.com/kaikoga/vpmify

## 動作環境

macOS と Windows で動くと思います。

## 役に立つ状況

VPMのパッケージに加えて、UPMでしか公開されていないパッケージをALCOMで一緒に管理したいときに便利です。

UPMでしか公開されていないパッケージとは、具体的には例えば `univrm:UniVRM` です。

## しくみ

1. Vpmifyにレシピを取り込みます。
   Vpmifyはレシピに含まれるパッケージごとに、ALCOMにインストールできるバージョンの一覧を作ります。
2. Vpmifyでパッケージをpullします。
   Vpmifyは選ばれたパッケージのバージョンをALCOMにユーザーパッケージとして登録します。
3. ALCOMで、ほかのVPMのパッケージと同じように、プロジェクトに入れられるようになります。

## レシピ

レシピとは、パッケージの内容をどこから取得し、どのようにVPMパッケージに変換するかのルールを示す設定ファイルです。

レシピは既に公開されているものを使うか、自分で書きます。

## レシピの書き方

レシピの書き方は [レシピを書く](recipes/index.md) を見てください。
