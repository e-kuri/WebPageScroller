import React, { Component } from 'react';
import WebPageDisplayer from './components/WebPageDisplayer/WebPageDisplayer';
import Tabs from './components/Tabs/Tabs';

class App extends Component {
  
  render() {
    return (
      <Tabs
        tabs={{
          Browse: <WebPageDisplayer />,
          Settings: (<div className="App">
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>)
        }}
      />
    );
  }
}

export default App;