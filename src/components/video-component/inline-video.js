import React, { Component } from 'react';


class InlineVideo extends Component {

  render() {
    return (
      <iframe id="cnbc-buffett-video-iframe"
              src="//qa-pa10pub.cnbc.com/partner-player/?partnerId=buffett&byGuid=3000639578&ucjs=1"
              scrolling="no"></iframe>
    );
  }
}

export default InlineVideo;