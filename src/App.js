import React, { Component } from 'react';
// import logo from './logo.svg';
import TopNavigation from './components/top-navigation/top-navigation';
import SiteBody from './components/site-body/site-body';
import './styles/App.css';
import './styles/base.css';
import VideoInline from './components/video-component/inline-video';

class App extends Component {
  render() {
    return (
      <div id="page-container">
        <TopNavigation />

        {/*<iframe id="cnbc-buffett-video-iframe" src="//qa-pa10pub.cnbc.com/partner-player/?partnerId=buffett&byGuid=3000639578&ucjs=1" scrolling="no"></iframe>*/}
        <VideoInline />

        <SiteBody />
      </div>
    );


    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
}

export default App;
