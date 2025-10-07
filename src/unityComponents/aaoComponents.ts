import UnityComponentItem from '@site/src/unityComponentItem';

const aaoComponents: UnityComponentItem[] = [
  {
    id: "uc:TraceAndOptimize",
    displayName: "AAO Trace And Optimize",
    link: "https://vpm.anatawa12.com/avatar-optimizer/ja/docs/reference/trace-and-optimize/"
  },
].map((x: any) => {
  x.className = "ucLinkAAO";
  return x;
});

export default aaoComponents;
