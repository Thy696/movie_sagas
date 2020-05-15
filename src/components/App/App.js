import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details'



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
