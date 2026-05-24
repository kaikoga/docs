import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import UnityComponent from '@site/src/components/UnityComponent';
import PlatformBadge from '../components/PlatformBadge';

export default {
  ...MDXComponents,
  UnityComponent,
  PlatformBadge: PlatformBadge,
};
