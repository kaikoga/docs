import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  path: string,
  description: JSX.Element;
};

// あとでなんか書く
const FeatureList: FeatureItem[] = [
  {
    title: 'Emote Wizard',
    image: require('@site/static/img/sstr16_120.png').default,
    path: 'emotewizard',
    description: (
      <>
        Animation and Expression Editor for VRChat Avatar SDK3
      </>
    ),
  },
  {
    title: 'Avatar Tinker Vista',
    image: require('@site/static/img/sstr16_120.png').default,
    path: 'ativ',
    description: (
      <>
        Small avatar tools for NDMF
      </>
    ),
  },
  {
    title: 'QuestReplacer',
    image: require('@site/static/img/sstr16_120.png').default,
    path: 'questreplacer',
    description: (
      <>
        Pseudo-non-destructive replace material and texture.
      </>
    ),
  },
  {
    title: 'NuguminTool',
    image: require('@site/static/img/sstr16_120.png').default,
    path: 'modularizer',
    description: (
      <>
        Create Modular Avatar prefabs from composed FBX asset.
      </>
    ),
  },
];

function Feature({title, image, path, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={path}>
          <img src={image} role="img"/>
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
