import UnityComponentItem from '@site/src/unityComponentItem';

const qrComponents: UnityComponentItem[] = [
  {
    id: "uc:QuestReplacer",
    displayName: "Quest Replacer",
    link: "/questreplacer/config"
  },
  {
    id: "uc:QuestReplacerDatabase",
    displayName: "Quest Replacer Database",
    link: "/questreplacer/database"
  },
].map((x: any) => {
  x.className = "ucLinkQR";
  return x;
});

export default qrComponents;
