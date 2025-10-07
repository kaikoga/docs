import UnityComponentItem from '@site/src/unityComponentItem';

const vqtComponents: UnityComponentItem[] = [
  {
    id: "uc:AvatarConverterSettings",
    displayName: "VQT Avatar Converter Settings",
    link: "https://kurotu.github.io/VRCQuestTools/docs/references/components/avatar-converter-settings?lang=auto"
  },
  {
    id: "uc:NetworkIDAssigner",
    displayName: "VQT Network ID Assigner",
    link: "https://kurotu.github.io/VRCQuestTools/ja/docs/references/components/network-id-assigner?lang=auto"
  },
].map((x: any) => {
  x.className = "ucLinkVQT";
  return x;
});

export default vqtComponents;
