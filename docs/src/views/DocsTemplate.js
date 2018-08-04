import React, { Component } from 'react';
import docsData from '../utils/docsData';

export default class DocsTemplate extends Component {
  state = {
    currentDocsPage: null
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    this.setState({
      currentDocsPage: docsData.find(d => d.slug === params.docsSlug)
    });
  }

  render() {
    const { currentDocsPage } = this.state;

    if (!currentDocsPage) return null;

    return <div>{currentDocsPage.component}</div>;
  }
}
