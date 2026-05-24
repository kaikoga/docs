import UnityComponentItem from '@site/src/unityComponentItem';

const daeComponents: UnityComponentItem[] = [
  {
    id: "dae:DenormalizedAvatarExporter",
    displayName: "Denormalized Avatar Exporter",
    link: "https://docs.hai-vr.dev/docs/products/denormalized-avatar-exporter"
  },
].map((x: any) => {
  x.classNames = ["ucLinkDAE"];
  return x;
});

export default daeComponents;
