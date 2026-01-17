import UnityComponentItem from '@site/src/unityComponentItem';

const vrcsdkComponents: UnityComponentItem[] = [
  {
    id: "vrc:VRCAvatarDescriptor",
    displayName: "VRC Avatar Descriptor",
    link: "https://creators.vrchat.com/avatars/creating-your-first-avatar#step-5---adding-an-avatar-descriptor"
  },
  {
    id: "vrc:PipelineManager",
    displayName: "VRC Pipeline Manager",
    link: "https://creators.vrchat.com/sdk/vrcpipelinemanager/"
  },
  {
    id: "vrc:VRCPhysBone",
    displayName: "VRC Phys Bone",
    link: "https://creators.vrchat.com/avatars/avatar-dynamics/physbones#vrcphysbone"
  },
  {
    id: "vrc:VRCPhysBoneCollider",
    displayName: "VRC Phys Bone Collider",
    link: "https://creators.vrchat.com/avatars/avatar-dynamics/physbones/#vrcphysbonecollider"
  },
].map((x: any) => {
  x.classNames = ["ucLinkVRCSDK"];
  return x;
});

export default vrcsdkComponents;
