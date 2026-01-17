import UnityComponentItem from '@site/src/unityComponentItem';

const vqtComponents: UnityComponentItem[] = [
  {
    id: "vqt:AvatarConverterSettings",
    displayName: "VQT Avatar Converter Settings",
    link: "https://kurotu.github.io/VRCQuestTools/docs/references/components/avatar-converter-settings?lang=auto"
  },
  {
    id: "vqt:NetworkIDAssigner",
    displayName: "VQT Network ID Assigner",
    link: "https://kurotu.github.io/VRCQuestTools/ja/docs/references/components/network-id-assigner?lang=auto"
  },
].map((x: any) => {
  x.classNames = ["ucLinkVQT"];
  return x;
});

export default vqtComponents;
