import UnityComponentItem from '@site/src/unityComponentItem';

const notComponents: UnityComponentItem[] = [
  {
    id: "ALCOM",
    displayName: "ALCOM",
    link: "https://vrc-get.anatawa12.com/alcom/"
  },
  {
    id: "Modular Avatar",
    displayName: "Modular Avatar",
    link: "https://modular-avatar.nadena.dev/ja/"
  },
  {
    id: "Modular Avatar Resonite",
    displayName: "Modular Avatar - Resonite support",
    link: "https://modular-avatar.nadena.dev/dev/ja/docs/experimental-features/resonite-support"
  },
  {
    id: "Chillaxins",
    displayName: "Chillaxins",
    link: "https://docs.hai-vr.dev/docs/products/chillaxins"
  },
].map((x: any) => {
  x.className = "ucLinkNot";
  return x;
});

export default notComponents;
