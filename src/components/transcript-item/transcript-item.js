import React, { Component } from 'react';


class TranscriptItem extends Component {

  render() {

    return (
      <div className="caption-container" id={this.props.id} data-buffett-bank-transcript-id={this.props.marker}>
        <div className="caption-section-title"> </div>
        <p className="buffett-transcript-text">
          {this.props.content}
        </p>
      </div>
    )
  }

}

export default TranscriptItem;