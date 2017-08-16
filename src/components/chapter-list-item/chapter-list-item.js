import React, { Component } from 'react';


class ChapterListItem extends Component {

  render() {

    return (
      <li className="cnbc-buffett-chapter-list-item" data-cnbc-seek-marker={this.props.marker}>
        {this.props.title}
      </li>
    );
  }
}

export default ChapterListItem;

