import UnityComponentItem from '@site/src/unityComponentItem';

const maComponents: UnityComponentItem[] = [
  {
    id: "ma:ModularAvatarMergeArmature",
    displayName: "MA Merge Armature",
    link: "https://modular-avatar.nadena.dev/docs/reference/merge-armature?lang=auto"
  },
  {
    id: "ma:ModularAvatarBoneProxy",
    displayName: "MA Bone Proxy",
    link: "https://modular-avatar.nadena.dev/docs/reference/bone-proxy?lang=auto"
  },
  {
    id: "ma:ModularAvatarMeshSettings",
    displayName: "MA MeshSettings",
    link: "https://modular-avatar.nadena.dev/docs/reference/mesh-settings?lang=auto"
  },
].map((x: any) => {
  x.classNames = ["ucLinkMA"];
  return x;
});

export default maComponents;
