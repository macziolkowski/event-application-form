import React, { Component } from 'react';
import './App.css';
import Layout from './components/layouts/Layout';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './stores/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <Layout></Layout>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
