import React, { Component } from 'react';
import NavBranding from '../navigation-branding/navigation-branding';
import NavItems from '../navigation-items/navigation-items';

class TopNavigation extends Component {

  render() {

    return (
      <header>
        <nav role="navigation">
          <NavBranding />
          <NavItems />
        </nav>
      </header>
    );
  }
}

export default TopNavigation;