import React, { Component } from 'react';
import ChapterList from '../chapter-list/chapter-list';
import Transcripts from '../transcripts/transcripts';

class SiteBody extends Component {

  render() {

    return (
      <section id="cnbc-buffett-content-container">

        <ChapterList/>

        <Transcripts/>

      </section>
    );
  }
}


export default SiteBody;