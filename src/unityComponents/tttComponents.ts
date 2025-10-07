import UnityComponentItem from '@site/src/unityComponentItem';

const tttComponents: UnityComponentItem[] = [
  {
    id: "uc:AtlasTexture",
    displayName: "TTT Atlas Texture",
    link: ""
  },
].map((x: any) => {
  x.className = "ucLinkTTT";
  return x;
});

export default tttComponents;
