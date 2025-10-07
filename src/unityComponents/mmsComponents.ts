import UnityComponentItem from '@site/src/unityComponentItem';

const mmsComponents: UnityComponentItem[] = [
  {
    id: "uc:MeshiaMeshSimplifier",
    displayName: "Meshia Mesh Simplifier",
    link: ""
  },
  {
    id: "uc:MeshiaCascadingAvatarMeshSimplifier",
    displayName: "Meshia Cascading Avatar Mesh Simplifier",
    link: ""
  },
].map((x: any) => {
  x.className = "ucLinkMMS";
  return x;
});

export default mmsComponents;
