import React, { Component } from 'react';

import './App.less';
import Footer from './components/footer';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Home from './components/home';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    console.log('compoent will mount');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-content">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="content">
            <Home />
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
