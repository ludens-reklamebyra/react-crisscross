import React from 'react';
import Installation, { meta as installMeta } from '../docs/installation.mdx';
import Usage, { meta as usageMeta } from '../docs/usage.mdx';

const docsData = [
  {
    ...installMeta,
    component: <Installation />
  },
  {
    ...usageMeta,
    component: <Usage />
  }
];

export default docsData;
