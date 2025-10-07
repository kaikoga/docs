---
sidebar_position: 1
---

# What's this?

Documents for various tools by kaikoga.

(because there are too much)

# How to get

## Install from VPM

VPM packages are available through [ALCOM](https://vrc-get.anatawa12.com/ja/alcom/).
Preferred for both VRChat users and not VRChat users.

<a href="vcc://vpm/addRepo?url=https%3A%2F%2Fvpm.kaikoga.net%2Findex.json">Add vpm.kaikoga.net to ALCOM / VCC</a>

Automatic depedency resolutions and updates are available with ALCOM. 

:::info[INFO]
Things like VRCSDK, UniVRM, NDMF are defined as optional dependency.
They should be installed separately.
:::

URL: https://vpm.kaikoga.net/

Repo URL for VPM CLI and alt-VPM users: https://vpm.kaikoga.net/index.json

:::info[INFO]
VRChat users can alson use VRChat Creator Companion.
:::

## Install UniVRM

It is recommended to install UniVRM in `Packages` directory, not `Assets` directory.

To do so, please install UniVRM as a UPM git package.

Add URLs below by either method:

- Open the Package Manager by menu bar -> `Window` -> `Package Manager`, open the "+" menu at the upper left and select `Add package from git URL...`.
  - https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.129.3
  - https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.129.3
  - https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM10#v0.129.3
- Or, add the URLs under `dependencies` of `Packages/manifest.json`. 


```
    "com.vrmc.gltf": "https://github.com/vrm-c/UniVRM.git?path=/Assets/UniGLTF#v0.129.3",
    "com.vrmc.univrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM#v0.129.3",
    "com.vrmc.vrm": "https://github.com/vrm-c/UniVRM.git?path=/Assets/VRM10#v0.129.3",
```

## Not so much Asked Questions

- Q. Where's documents for Kogapen or Kogastats?
  - A. Wait a minute...
- Q. How about MeshWeaver?
  - A. Refer https://kaikoga.github.io/MeshWeaver-unity/docs/ja/ (separate site because maintenance policy differs) 
