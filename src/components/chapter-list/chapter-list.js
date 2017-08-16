import React, { Component } from 'react';
import ChapterListItem from '../chapter-list-item/chapter-list-item';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner';

class ChapterList extends Component {

  renderChapterListItems() {
    // console.log('=== renderChapterListItems ===');
    // console.log(this.props);
    // console.log(this.props.chapterListItems.chapters.items.length);
    // console.log('=== END renderChapterListItems ===');

    if (this.props.chapterListItems.chapters.isFetching) {
      return (
        <Spinner content="Loading your chapter data..."/>
      )
    } else if (this.props.chapterListItems.chapters.items.length > 0) {

      return this.props.chapterListItems.chapters.items.map((chapterListItem, index) => {
        console.log(chapterListItem);
        const CHAPTER_ITEM_KEY = `chapter-item-${index}`;
        return (
          <ChapterListItem
            key={CHAPTER_ITEM_KEY}
            title={chapterListItem.title}
            marker={chapterListItem.marker}
          />
        );
      });
    } else {
      return (
        <div>
          There are no chapters associated with your video.
        </div>
      )
    }
  }

  render() {

    const HEADER_TITLE = 'Quick Navigation';

    return (
      <div id="cnbc-buffett-chapter-list-side-nav-container">
        <p className="cnbc-buffett-quick-nav-title">{HEADER_TITLE}</p>
        <ul id="cnbc-buffett-chapter-list-side-nav">
          { this.renderChapterListItems() }
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    chapterListItems : state.chapterListItems
  }
}

export default connect(mapStateToProps, null)(ChapterList);