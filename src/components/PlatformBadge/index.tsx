import styles from './styles.module.scss';

const platforms: { [key: string]: [string, string] } = {
  "VRChat": ["platformName platformNameVRChat", "VRChat"],
  "UniVRM0": ["platformName platformNameUniVRM0", "UniVRM VRM0.x"],
  "UniVRM1": ["platformName platformNameUniVRM1", "UniVRM VRM1.0"],
  "ChilloutVR": ["platformName platformNameChilloutVR platformNameExtension", "ChilloutVR"],
  "Basis": ["platformName platformNameBasis platformNameExtension", "Basis"],
  "DAE": ["platformName platformNameDAE platformNameExtension", "Denormalized Avatar Exporter"],
  "Unity": ["platformGroup platformGroupUnity", "Unity"],
  "Animator": ["platformGroup platformGroupAnimator", "Animator"],
  "Any": ["platformAny", "Any Platform"],
  "Mixed": ["platformAny", "Mixed Platforms"],
};


export default function PlatformBadge({id}): JSX.Element {
  let [pfClasses, pfName] = platforms[id];
  let className = [...pfClasses.split(" ").map(pfClass => styles[pfClass])].join(' ');
  return (
    <span className={className}>{pfName}</span>
  );
}
