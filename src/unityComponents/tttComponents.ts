import UnityComponentItem from '@site/src/unityComponentItem';

const tttComponents: UnityComponentItem[] = [
  {
    id: "ttt:AtlasTexture",
    displayName: "TTT Atlas Texture",
    link: ""
  },
].map((x: any) => {
  x.classNames = ["ucLinkTTT"];
  return x;
});

export default tttComponents;
