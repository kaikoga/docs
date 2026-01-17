import UnityComponentItem from '@site/src/unityComponentItem';

const qrComponents: UnityComponentItem[] = [
  {
    id: "qr:QuestReplacer",
    displayName: "Quest Replacer",
    link: "/questreplacer/config"
  },
  {
    id: "qr:QuestReplacerDatabase",
    displayName: "Quest Replacer Database",
    link: "/questreplacer/database"
  },
].map((x: any) => {
  x.classNames = ["ucLinkQR"];
  return x;
});

export default qrComponents;
