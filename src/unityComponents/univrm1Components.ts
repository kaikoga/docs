import UnityComponentItem from '@site/src/unityComponentItem';

const univrm1Components: UnityComponentItem[] = [
  {
    id: "univrm1:Vrm10Instance",
    displayName: "VRMInstance",
    link: ""
  },
  {
    id: "univrm1:Humanoid",
    displayName: "Humanoid",
    link: ""
  },
  {
    id: "univrm1:VRM10Object",
    displayName: "VRM10Object",
    link: ""
  },
].map((x: any) => {
  x.classNames = ["ucLinkUniVRM1"];
  return x;
});

export default univrm1Components;
