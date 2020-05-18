import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { HashRouter, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details'
import Edit from '../Edit/Edit'
import Admin from '../Admin/Admin'



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/edit" component={Edit} />
          <Route path="/admin" component={Admin} />
          
        </HashRouter>
      </div>
    );
  }
}

export default App;
