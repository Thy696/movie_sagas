import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details'

class Header extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Link to= '/'>Home</Link>
                    <Route exact path="/" component={Home} />
                    <Route path="/details" component={Details} />
                </HashRouter>
            </div>
        )
    }
}
export default Header;