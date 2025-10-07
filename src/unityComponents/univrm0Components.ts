import UnityComponentItem from '@site/src/unityComponentItem';

const ativComponents: UnityComponentItem[] = [
  {
    id: "uc:VRMMeta",
    displayName: "VRM Meta",
    link: ""
  },
  {
    id: "uc:VRMMetaObject",
    displayName: "VRM Meta Object",
    link: ""
  },
  {
    id: "uc:VRMBlendShapeProxy",
    displayName: "VRM Blend Shape Proxy",
    link: ""
  },
  {
    id: "uc:BlendShapeAvatar",
    displayName: "Blend Shape Avatar",
    link: ""
  },
  {
    id: "uc:VRMSpringBone",
    displayName: "VRM Spring Bone",
    link: ""
  },
  {
    id: "uc:VRMFirstPerson",
    displayName: "VRM First Person",
    link: ""
  },
].map((x: any) => {
  x.className = "ucLinkUniVRM0";
  return x;
});

export default ativComponents;
