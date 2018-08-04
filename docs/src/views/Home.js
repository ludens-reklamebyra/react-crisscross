import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import docsData from '../utils/docsData';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello world, Home</h1>
        <Link to={`/docs/${docsData[0].slug}`}>Go to docs</Link>
      </div>
    );
  }
}
