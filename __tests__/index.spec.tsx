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
      <Layout container xs={{ gap: 16 }}>
        <Layout item lg={{ basis: 6 }}>
          I'm positioned left
        </Layout>
        <Layout item lg={{ basis: 6 }}>
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
        xs: 20,
        sm: 480,
        md: 747,
        lg: 960
      }
    };

    const layout = (
      <LayoutProvider settings={settings}>
        <Layout container xs={{ gap: 16 }}>
          <Layout
            item
            xs={{ basis: 12 }}
            sm={{ basis: 6 }}
            md={{ basis: 6 }}
            lg={{ basis: 6 }}
          >
            I'm positioned left
          </Layout>
          <Layout
            item
            xs={{ basis: 12 }}
            sm={{ basis: 6 }}
            md={{ basis: 6 }}
            lg={{ basis: 6 }}
          >
            I'm positioned right
          </Layout>
        </Layout>
      </LayoutProvider>
    );

    const tree = create(layout).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
