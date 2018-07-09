import * as React from 'react';
import { create } from 'react-test-renderer';
import Layout from '../src/index';

describe('Layout', () => {
  it('renders the simplest example of the Layout', () => {
    const layoutComponent = (
      <Layout container>
        <Layout item>hello world</Layout>
      </Layout>
    );

    const tree = create(layoutComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
