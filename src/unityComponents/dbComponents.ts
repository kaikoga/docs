import UnityComponentItem from '@site/src/unityComponentItem';

const maComponents: UnityComponentItem[] = [
  {
    id: "db:DynamicBone",
    displayName: "Dynamic Bone",
  },
  {
    id: "db:DynamicBoneCollider",
    displayName: "Dynamic Bone Collider",
  },
  {
    id: "db:DynamicBonePlaneCollider",
    displayName: "Dynamic Bone Plane Collider",
  },
].map((x: any) => {
  x.classNames = ["ucLinkDB"];
  return x;
});

export default maComponents;
