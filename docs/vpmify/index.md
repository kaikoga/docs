---
sidebar_position: 1
---

import VpmifyIcon from './img/vpmify.svg';

# Vpmify

<AiGeneratedBadge />

<VpmifyIcon title="Vpmify" width={128} height={128} />

Vpmify is a tool that lets VCC and `alcom:ALCOM` handle packages that are not VPM packages.

With Vpmify, you can register the following packages with ALCOM as user packages, following a recipe.

- UPM packages
- Git UPM packages published on GitHub

## Download

Download Vpmify from [GitHub Releases](https://github.com/kaikoga/vpmify/releases).

GitHub: https://github.com/kaikoga/vpmify

## Requirements

It should work on macOS and Windows.

## Useful when

Vpmify is useful when you want to manage packages that are published only as UPM packages together with your VPM packages in ALCOM.

`univrm:UniVRM` is one example of a package that is published only as UPM packages.

## How it works

1. Add a recipe to Vpmify.
   For each package in the recipe, Vpmify makes a list of the versions that can be installed with ALCOM.
2. Pull packages with Vpmify.
   Vpmify registers the chosen versions of the packages with ALCOM as user packages.
3. In ALCOM, you can now add the packages to your projects, as you do with other VPM packages.

## Recipes

A recipe is a configuration file with the rules for where to get the contents of packages, and how to convert them into VPM packages.

You can use a recipe that is already published, or write your own.

## Writing recipes

To write a recipe, see [Writing recipes](recipes/index.md).
