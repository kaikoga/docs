import UnityComponentItem from '@site/src/unityComponentItem';

const cvrComponents: UnityComponentItem[] = [
  {
    id: "cvr:CVRAvatar",
    displayName: "CVR Avatar",
    link: "https://docs.chilloutvr.net/cck/components/cvr-avatar"
  },
].map((x: any) => {
  x.classNames = ["ucLinkCVRCCK"];
  return x;
});

export default cvrComponents;
