import UnityComponentItem from '@site/src/unityComponentItem';

const mc2Components: UnityComponentItem[] = [
  {
    id: "mc2:MagicaCloth2",
    displayName: "Magica Cloth 2",
    link: "https://magicasoft.jp/mc2_magicaclothcomponent/"
  },
].map((x: any) => {
  x.classNames = ["ucLinkMC2"];
  return x;
});

export default mc2Components;
