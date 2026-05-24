import UnityComponentItem from '@site/src/unityComponentItem';

const abletComponents: UnityComponentItem[] = [
  {
    id: "ablet:Ablet",
    displayName: "Ablet",
    link: "/ablet/"
  },
  {
    id: "ablet:AbletSelectSubplatform",
    displayName: "Ablet Select Subplatform",
    link: "/ablet/components/ablet_select_subplatform"
  },
  {
    id: "ablet:AdLib",
    displayName: "Ablet",
    link: "/ablet/adlib"
  },
  {
    id: "ablet:Loch",
    displayName: "Loch",
    link: "/ablet/loch"
  },
].map((x: any) => {
  x.classNames = ["ucLinkAblet"];
  return x;
});

export default abletComponents;
