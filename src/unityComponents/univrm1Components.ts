import UnityComponentItem from '@site/src/unityComponentItem';

const ativComponents: UnityComponentItem[] = [
  {
    id: "uc:Vrm10Instance",
    displayName: "VRMInstance",
    link: ""
  },
  {
    id: "uc:Humanoid",
    displayName: "Humanoid",
    link: ""
  },
  {
    id: "uc:VRM10Object",
    displayName: "VRM10Object",
    link: ""
  },
].map((x: any) => {
  x.className = "ucLinkUniVRM1";
  return x;
});

export default ativComponents;
