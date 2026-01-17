import UnityComponentItem from '@site/src/unityComponentItem';

const modularizerComponents: UnityComponentItem[] = [
  {
    id: "modularizer:ModularizerConfig",
    displayName: "NuguminTool Config",
    link: "modularizer/manual"
  },
].map((x: any) => {
  x.classNames = ["ucLinkModularizer"];
  return x;
});

export default modularizerComponents;
