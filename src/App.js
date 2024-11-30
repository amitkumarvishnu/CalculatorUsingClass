import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Calculator />
        </div>
      </Provider>
    );
  }
}

export default App;
