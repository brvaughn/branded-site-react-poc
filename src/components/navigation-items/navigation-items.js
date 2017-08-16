import React, { Component } from 'react';
import NavItem from '../navigation-item/navigation-item';
import { connect } from 'react-redux';

class NavItems extends Component {

  renderNavItems() {
    return this.props.navigationItems.map((navItem, index) => {

      const NAV_KEY = `nav-key-${index}`;
      return (
        <NavItem
          key={NAV_KEY}
          content={navItem.content}
          isSearch={navItem.isSearch}
        />
      );
    });
  }

  render() {

    return (
      <div id="navigation">
        <ul id="navigation-items">
          {this.renderNavItems()}
        </ul>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    navigationItems : state.navItems
  };
}

export default connect(mapStateToProps, null)(NavItems);

