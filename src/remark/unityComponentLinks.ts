import {transformNode} from '@docusaurus/mdx-loader/src/remark/utils';

import type {Transformer} from 'unified';
import type {Root} from 'mdast';

import unityComponentsDef from '../unityComponentsDef';

// `VRCAvatarDescriptor` => <UnityComponent id="VRCAvatarDescriptor" />

export default function plugin(): Transformer<Root> {
  return async (root) => {
    const {visit} = await import('unist-util-visit');

    visit(root, 'inlineCode', (node) => {
      const id = node.value;
      if (unityComponentsDef.some(c => c.id === id)) {
        transformNode(node, {
          type: 'mdxJsxFlowElement',
          name: 'UnityComponent',
          attributes: [{
            type: 'mdxJsxAttribute',
            name: "id",
            value: id,
          }],
        });
      }
    });
  };
}
