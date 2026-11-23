import Translate from '@docusaurus/Translate';
import styles from './styles.module.scss';

// Place right after the H1 so that it can be mechanically moved into front matter later.

export default function AiGeneratedBadge(): JSX.Element {
  return (
    <div className={styles.aiGenerated}>
      <Translate id="aiGeneratedBadge.message">このページは AI で生成されたコンテンツを含みます</Translate>
    </div>
  );
}
