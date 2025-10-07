import UnityComponentItem from '@site/src/unityComponentItem';

const modularizerComponents: UnityComponentItem[] = [
  {
    id: "uc:ModularizerConfig",
    displayName: "NuguminTool Config",
    link: "modularizer/manual"
  },
].map((x: any) => {
  x.className = "ucLinkModularizer";
  return x;
});

export default modularizerComponents;
