import unityComponentsDef from '../../unityComponentsDef';
import styles from './styles.module.css';

// `VRCAvatarDescriptor` => <UnityComponent id="VRCAvatarDescriptor" />

export default function UnityComponent({children, id}): JSX.Element {
  const component = unityComponentsDef.find(c => c.id === id);
  const displayName = component?.displayName ?? id;
  const className = [styles.ucLink, ...component.classNames.map(className => styles[className])].join(' ');
  if (!component) {
    console.log(`unknown component name found: ${id}`)
  }
  if (component.link) {
    return (
      <> <a href={component.link} className={className}><code>{displayName}</code></a> </>
    );
  } else {
    return (
      <> <span className={className}><code>{displayName}</code></span> </>
    );
  }
}
