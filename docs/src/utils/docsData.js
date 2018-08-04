import React from 'react';
import Installation, { meta as installMeta } from '../docs/installation.mdx';
import Usage, { meta as usageMeta } from '../docs/usage.mdx';
import Properties, { meta as propertyMeta } from '../docs/properties.mdx';
import Settings, { meta as settingsMeta } from '../docs/settings.mdx';

const docsData = [
  {
    ...installMeta,
    component: <Installation />
  },
  {
    ...usageMeta,
    component: <Usage />
  },
  {
    ...propertyMeta,
    component: <Properties />
  },
  {
    ...settingsMeta,
    component: <Settings />
  }
];

export default docsData;
