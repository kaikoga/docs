import UnityComponentItem from '@site/src/unityComponentItem';

const univrm0Components: UnityComponentItem[] = [
  {
    id: "univrm0:VRMMeta",
    displayName: "VRM Meta",
    link: ""
  },
  {
    id: "univrm0:VRMMetaObject",
    displayName: "VRM Meta Object",
    link: ""
  },
  {
    id: "univrm0:VRMBlendShapeProxy",
    displayName: "VRM Blend Shape Proxy",
    link: ""
  },
  {
    id: "univrm0:BlendShapeAvatar",
    displayName: "Blend Shape Avatar",
    link: ""
  },
  {
    id: "univrm0:VRMSpringBone",
    displayName: "VRM Spring Bone",
    link: ""
  },
  {
    id: "univrm0:VRMFirstPerson",
    displayName: "VRM First Person",
    link: ""
  },
].map((x: any) => {
  x.classNames = ["ucLinkUniVRM0"];
  return x;
});

export default univrm0Components;
