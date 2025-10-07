import UnityComponentItem from '@site/src/unityComponentItem';

import vrcsdkComponents from './unityComponents/vrcsdkComponents';
import univrm0Components from './unityComponents/univrm0Components';
import univrm1Components from './unityComponents/univrm1Components';
import maComponents from './unityComponents/maComponents';
import aaoComponents from './unityComponents/aaoComponents';
import mmsComponents from './unityComponents/mmsComponents';
import tttComponents from './unityComponents/tttComponents';
import vqtComponents from './unityComponents/vqtComponents';
import ativComponents from './unityComponents/ativComponents';
import ewComponents from './unityComponents/ewComponents';
import qrComponents from './unityComponents/qrComponents';
import modularizerComponents from './unityComponents/modularizerComponents';
import notComponents from './unityComponents/notComponents';

const unityComponentsDef: UnityComponentItem[] = [
  ...vrcsdkComponents,
  ...univrm0Components,
  ...univrm1Components,
  ...maComponents,
  ...aaoComponents,
  ...mmsComponents,
  ...tttComponents,
  ...vqtComponents,
  ...ativComponents,
  ...ewComponents,
  ...qrComponents,
  ...modularizerComponents,
  ...notComponents,
];

export default unityComponentsDef;
