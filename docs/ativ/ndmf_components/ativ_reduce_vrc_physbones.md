---
sidebar_position: 1
---

# ATiV Reduce VRC PhysBones

指定されたVRC PhysBoneを残して、ほかを全て削除します。

## 役に立つ状況

Quest対応の際に残したい揺れものがある場合に便利です。

## 使い方

アバター内の任意の場所にコンポーネントを追加してください。

無設定の状態では、PC以外のプラットフォームで `uc:AtivDeleteAllVRCPhysBones` と同様に全ての揺れものを削除します。

`Add All VRC PhysBones` を押して全ての揺れものオブジェクトを `Keep Bone Roots` に登録した後、必要なものを残して削除してください。

NDMFによるアバターのビルド時に、アバターに含まれるいずれかの `uc:AtivReduceDynamics` に登録されている `Keep Bone Roots` に対応する `uc:VRCPhysBone` のみを残し、ほかを削除します。

:::tip[TIPS]
衣装の揺れものを残したい場合、衣装に追加した `uc:AtivReduceDynamics` に登録しておくと便利です。
:::

インスペクタには、この `uc:AtivReduceDynamics` が保持するVRC PhysBoneに関するパフォーマンスランクの概算値が表示されます。
この数値はNDMFによるアバターのビルドを行うことで減少します。

## プラットフォーム別の挙動

PC向けビルドでは、アバターに含まれるいずれかの `uc:AtivReduceDynamics` で `Reduce On PC` がオンになっていない限り、揺れものを削減しません。

AndroidまたはiOS向けビルドでは、アバターに含まれるいずれかの `uc:AtivReduceDynamics` で `Reduce On Mobile` がオンになっていない限り、揺れものを削減しません。

## Network ID の扱い

このコンポーネントはアバターの全ての `uc:VRCPhysBone` のNetwork IDを（未指定だった場合に）自動的に割り当てることで、プラットフォーム間の同期ズレを抑制しようとします。

:::tip[TIPS]
Network IDを割り当てる方法には、ほかにVRCSDKのNetwork ID Utilityや `uc:NetworkIDAssigner` などがあります。
:::

このコンポーネントは `uc:VRCPhysBone` 以外のNetwork IDは操作しません。
`uc:AtivReduceDynamics` は、 `uc:VRCPhysBone` 以外のコンポーネントにはVRCSDKが自動で同じNetwork IDを割り当てることを期待します。

:::note[NOTE]
具体的には、 `uc:VRCPhysBone` に対して以下の戦略に基づきNetwork IDの割り当てを行います。

- 常に削減されないPhysBoneに対して、小さいNetwork IDの値
- 他のプラットフォームで削減されるPhysBoneに対して、大きいNetwork IDの値
:::
