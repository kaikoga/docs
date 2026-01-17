import UnityComponentItem from '@site/src/unityComponentItem';

const mmsComponents: UnityComponentItem[] = [
  {
    id: "mms:MeshiaMeshSimplifier",
    displayName: "Meshia Mesh Simplifier",
    link: ""
  },
  {
    id: "mms:MeshiaCascadingAvatarMeshSimplifier",
    displayName: "Meshia Cascading Avatar Mesh Simplifier",
    link: ""
  },
].map((x: any) => {
  x.classNames = ["ucLinkMMS"];
  return x;
});

export default mmsComponents;
