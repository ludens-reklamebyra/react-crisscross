import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import DocsTemplate from './DocsTemplate';
import DocsNav from '../components/DocsNav';

const StyledDocs = styled.div`
  margin: 45px 0 0 250px;
  padding: 1rem 2rem;
`;

export default class Docs extends Component {
  render() {
    return (
      <div>
        <DocsNav history={this.props.history} />
        <StyledDocs>
          <Switch>
            <Route
              path="/docs/:docsSlug"
              exact
              render={({ location, ...rest }) => (
                <DocsTemplate key={location.key} {...rest} />
              )}
            />
          </Switch>
        </StyledDocs>
      </div>
    );
  }
}
