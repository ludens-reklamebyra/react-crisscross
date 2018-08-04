import React, { Component, Fragment } from 'react';
import Prism from 'prismjs';
import { Helmet } from 'react-helmet';
import docsData from '../utils/docsData';

export default class DocsTemplate extends Component {
  state = {
    currentDocsPage: null
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    this.setState(
      {
        currentDocsPage: docsData.find(d => d.slug === params.docsSlug)
      },
      () => {
        Prism.highlightAll();
      }
    );
  }

  render() {
    const { currentDocsPage } = this.state;

    if (!currentDocsPage) return null;

    return (
      <div>
        <Helmet>
          <title>{currentDocsPage.label} | React-crisscross</title>
          <meta name="title" content={currentDocsPage.metaTitle} />
          <meta property="og:title" content={currentDocsPage.metaTitle} />
          <meta name="description" content={currentDocsPage.metaDescription} />
          <meta
            property="og:description"
            content={currentDocsPage.metaDescription}
          />
          {currentDocsPage.metaImage && (
            <Fragment>
              <meta name="image" content={currentDocsPage.metaImage} />
              <meta property="og:image" content={currentDocsPage.metaImage} />
            </Fragment>
          )}
        </Helmet>
        {currentDocsPage.component}
      </div>
    );
  }
}
