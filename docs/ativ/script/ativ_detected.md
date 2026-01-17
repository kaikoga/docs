---
sidebar_position: 1
---

# ATIV_DETECTED 

UniVRMのインストールをスクリプトから検出する仕組みを提供します。

asmdefのversionDefinesを利用する場合はUniVRMをUPMでインストールしている場合のみ検出可能です。
`ATIV_DETECTED_VRM0` および `ATIV_DETECTED_VRM1` はそれに加えて、UniVRMをunitypackageでインストールしている場合も検出可能です。

## 前提条件

UniVRMのバージョンは判定できません。

UniVRMのバージョンを判定したい場合は、asmdefのversionDefines、またはC#リフレクションを用いて判定してください。

## 役に立つ状況

UniVRMのasmdefを参照したり、UniVRMの存在によって挙動が変化するエディタ拡張ツールを作る場合に便利です。

## 使い方

UniVRMのVRM0.xがインストールされている場合、Unityのプロジェクト全体で `ATIV_DETECTED_VRM0` が定義されます。

UniVRMのVRM1.0がインストールされている場合、Unityのプロジェクト全体で `ATIV_DETECTED_VRM1` が定義されます。

### 詳細

プロジェクト内にUniVRMのスクリプトが含まれているかどうかを検出します。
このため、以下の

- unitypackageで `Assets` 以下にインストールされたUniVRM
- unitypackageで `Packages` 以下にインストールされたUniVRM
- UPMで `Packages` 以下にインストールされたUniVRM
- UPMで `Packages` 以下に他のライブラリの一部としてインストールされたUniVRM

:::info[INFO]
`warudo:Warudo` のSDKは内部にUniVRM 0.129.1を含みます。
これは最後のケースに該当し、 `ATIV_DETECTED` によって検出可能です。
:::

:::info[INFO]
`cluster:Cluster Creator Kit` のSDKは内部に古いUniVRMのMToonのみを含みます。
これはUniVRMとして扱われません。
:::

## 凝った使い方

単独ではUPMでインストールされたUniVRMを検出し、Avatar Tinker Vistaが入っている場合はunitypackageでインストールされたUniVRMを追加で検出する場合は、以下のいずれかの方法が使えます。

- asmdefの `versionDefines` を普通に定義する。
  asmdefの `defineConstraints` や条件コンパイルでは、 `|| ATIV_DETECTED_VRM0` で、 `versionDefines` で定義されたシンボルと `ATIV_DETECTED_VRM0` の両方を参照する。
- または、asmdefの `versionDefines` で定義されるシンボルを `ATIV_DETECTED_VRM0` または `ATIV_DETECTED_VRM1` にする。
