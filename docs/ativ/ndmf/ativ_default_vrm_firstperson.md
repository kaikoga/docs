---
sidebar_position: 1
---

# ATiV Default VRM0+1 FirstPerson

VRMFirstPerson / Vrm10Instance のFirstPerson設定が行われていないRendererに対して指定されたデフォルト値を割り当てます。

## 役に立つ状況

VRM0.x / VRM1.0 ではFirstPerson設定が未指定の場合はAuto扱いになります。
FirstPerson設定がAutoの場合、Headに追従するボーンのウェイトを持っているポリゴンはVRでは他人からのみ見え、
それ以外のポリゴンはVRでは自分と他人の両方から見えます。 

衣装の着せ替えなどでRendererが増減するような状況で、初期値をAuto以外（つまり、Both）にしたい時に便利です。

## 使い方

アバター内の任意の場所にコンポーネントを追加してください。
