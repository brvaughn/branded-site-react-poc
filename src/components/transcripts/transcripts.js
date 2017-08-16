import React, { Component } from 'react';
import { connect } from 'react-redux';
import TranscriptItem from '../transcript-item/transcript-item';

class Transcripts extends Component {

  renderTranscriptItems() {

    if (this.props) {
      return this.props.transcripts.map((transcriptItem, index) => {
        const TRANSCRIPT_KEY = `caption${index}`;
        return (
          <TranscriptItem
            key={TRANSCRIPT_KEY}
            id={TRANSCRIPT_KEY}
            content={transcriptItem.content}
            marker={transcriptItem.marker}
          />
        )
      });
    } else {
      return (
        <p>Loading video captions...</p>
      )
    }


  }


  render() {

    return (
      <div id="cnbc-buffett-transcript-container">
        {this.renderTranscriptItems()}
      </div>

    );
  }

}

function mapStateToProps(state) {
  return {
    transcripts : state.transcripts
  }
}

export default connect(mapStateToProps, null)(Transcripts);