import React, { Component } from 'react';
import spinner from '../../spinner.gif';


class Spinner extends Component {

  render() {
    return (
      <div>
        <div className="spinner-container">
          <img src={spinner} className="loading-spinner"/>
        </div>
        {this.props.content}
      </div>
    )
  }
}

export default Spinner;