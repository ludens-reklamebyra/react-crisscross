import * as React from 'react';
import { create } from 'react-test-renderer';
import Layout from '../src/index';

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
});