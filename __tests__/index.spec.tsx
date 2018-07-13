import * as React from 'react';
import { create } from 'react-test-renderer';
import Layout, { LayoutProvider } from '../src/index';

import 'jest-styled-components';

describe('Layout', () => {
  test('Simplest example of the Layout', () => {
    const layout = (
      <Layout container>
        <Layout item>hello world</Layout>
      </Layout>
    );

    const tree = create(layout).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Simple two column layout', () => {
    const layout = (
      <Layout container gap={16}>
        <Layout item lg={6}>
          I'm positioned left
        </Layout>
        <Layout item lg={6}>
          I'm positioned right
        </Layout>
      </Layout>
    );

    const tree = create(layout).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Custom settings with layout provider', () => {
    const layout = (
      <LayoutProvider settings={{ mediaQueries: { xsmall: 300 } }}>
        <Layout container gap={16}>
          <Layout item lg={6}>
            I'm positioned left
          </Layout>
          <Layout item lg={6}>
            I'm positioned right
          </Layout>
        </Layout>
      </LayoutProvider>
    );

    const tree = create(layout).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
