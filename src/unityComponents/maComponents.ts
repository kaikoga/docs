import UnityComponentItem from '@site/src/unityComponentItem';

const maComponents: UnityComponentItem[] = [
  {
    id: "uc:ModularAvatarMergeArmature",
    displayName: "MA Merge Armature",
    link: ""
  },
  {
    id: "uc:ModularAvatarBoneProxy",
    displayName: "MA Bone Proxy",
    link: ""
  },
].map((x: any) => {
  x.className = "ucLinkMA";
  return x;
});

export default maComponents;
