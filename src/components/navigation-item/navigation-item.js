import React, { Component } from 'react';
// import { connect } from 'react-redux';

class NavItem extends Component {


  render() {

    if (this.props.isSearch) {
      return (
        <li className="navigation-item-right">
          <input value={this.props.content} type="text"/>
        </li>
      );
    } else {
      return (
        <li className="navigation-item">
          <a>{this.props.content}</a>
        </li>

      );
    }
  }
}


export default NavItem;