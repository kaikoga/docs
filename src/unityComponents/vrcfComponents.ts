import UnityComponentItem from '@site/src/unityComponentItem';

const vrcfComponents: UnityComponentItem[] = [
  {
    id: "vrcf:AnchorOverrideFix",
    displayName: "Anchor Override Fix",
    link: "https://vrcfury.com/components/other#anchor-override-fix"
  },
  {
    id: "vrcf:ArmatureLink",
    displayName: "Armature Link",
    link: "https://vrcfury.com/components/armature-link"
  },
  {
    id: "vrcf:BoundingBoxFix",
    displayName: "Bounding Box Fix",
    link: "https://vrcfury.com/components/other#bounding-box-fix"
  },
].map((x: any) => {
  x.classNames = ["ucLinkVRCF"];
  return x;
});

export default vrcfComponents;
