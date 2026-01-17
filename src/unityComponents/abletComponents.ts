import UnityComponentItem from '@site/src/unityComponentItem';

const abletComponents: UnityComponentItem[] = [
  {
    id: "ablet:Ablet",
    displayName: "Ablet",
    link: "/ablet/"
  },
].map((x: any) => {
  x.classNames = ["ucLinkAblet"];
  return x;
});

export default abletComponents;
