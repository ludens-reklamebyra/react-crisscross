import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from '../src/index';

storiesOf('Layout', module).add('Basic usage', () => (
  <Layout container>
    <Layout item>
      Content here
    </Layout>
  </Layout>
));

storiesOf('Layout', module).add('Item sizes', () => (
  <Layout container>
    <Layout item xs={4}>
      Content here
    </Layout>
    <Layout item xs={4}>
      Content here
    </Layout>
    <Layout item xs={4}>
      Content here
    </Layout>
  </Layout>
));
