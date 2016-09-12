import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';

import { findRoute } from '../utils';
import { routes, LinkHelper } from '../routes';

import './mainLayout.scss';

export default class MainLayout extends Component {

  static propTypes = {
    location: PropTypes.object
  };

  render() {
    const { children, location } = this.props;
    const cfg = findRoute(location.pathname);
    const route = cfg || routes.homepage;
    const navLinkProps = {
      className: 'layout__nav-link',
      activeClassName: 'layout__nav-link--selected'
    };

    return (
      <div className="layout layout--main">
        <DocumentMeta title={ route.title } />
        <nav className="layout__nav">
          <span className="layout__nav-header">Responsive Table</span>
          <LinkHelper to='homepage' { ...navLinkProps } />
        </nav>
        <div className="layout__content">
          {children}
        </div>
        <footer className="layout__footer">
          Hosted at <a href="https://github.com/peter-mouland/responsive-table">https://github.com/peter-mouland/responsive-table</a>
        </footer>
      </div>
    );
  }
}
