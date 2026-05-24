---
sidebar_position: 120
---

# UniVRMサポート

## アバターエクスポートの変更

:::info[INFO]
UniVRMのUIからVRM0.xまたはVRM1.0のVRMファイルをエクスポートする場合、その過程でアバターに含まれるテクスチャのインポート設定が非圧縮に設定されます。

ref: https://github.com/vrm-c/UniVRM/issues/964

これは同じテクスチャをVRMアバターとVRM以外のアバターの両方から参照している場合に問題になります。\
例えば、VRMファイルを出力した後にVRChatアバターをビルドした場合、VRChatアバターのテクスチャが非圧縮でビルドされます。
:::

Abletを利用してVRMファイルをエクスポートした場合、テクスチャのインポート設定は変更されません。

以下の操作を行ってVRM0.xまたはVRM1.0のVRMファイルをエクスポートした場合、AbletのVRMエクスポートの挙動が適用されます。

- AbletのUIからVRMファイルをエクスポートした場合
- または、[Avatar Tinker VistaのNDMF VRMサポート](/ativ/ndmf/vrm_support.md) を利用してNDMFのUIからVRMファイルをエクスポートした場合

:::note[NOTE]
GPUに最適化された圧縮が適用されるためテクスチャの画質は劣りますが、VRChatなどのプラットフォームに出力した場合と見た目を合わせやすくなります。
:::
