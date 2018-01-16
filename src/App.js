import React, { Component } from 'react';

import Footer from './components/footer';
import Header from './components/header';
import Sidebar from './components/sidebar';
import './App.less';
import Routes from './routes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="App-header navbar">
          <Header />
        </div>
        <div className="App-content">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="content">
            <Routes />
          </div>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
