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
    const settings = {
      mediaQueries: {
        xsmall: 20,
        small: 480,
        medium: 747,
        large: 960
      }
    };

    const layout = (
      <LayoutProvider settings={settings}>
        <Layout container gap={16}>
          <Layout item xs={12} sm={6} md={6} lg={6}>
            I'm positioned left
          </Layout>
          <Layout item xs={12} sm={6} md={6} lg={6}>
            I'm positioned right
          </Layout>
        </Layout>
      </LayoutProvider>
    );

    const tree = create(layout).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
