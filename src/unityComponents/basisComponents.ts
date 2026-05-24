import UnityComponentItem from '@site/src/unityComponentItem';

const basisComponents: UnityComponentItem[] = [
  {
    id: "basis:BasisAvatar",
    displayName: "Basis Avatar",
    link: "https://docs.basisvr.org/en/docs/avatar/setup#basis-avatar-setup"
  },
  {
    id: "basis:JiggleRig",
    displayName: "Jiggle Rig",
    link: "https://docs.basisvr.org/en/docs/avatar/jiggle"
  },
].map((x: any) => {
  x.classNames = ["ucLinkBasis"];
  return x;
});

export default basisComponents;
