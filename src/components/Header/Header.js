import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';


class Header extends Component {
    // handleClick = () => {
    //     // handle next button to moving to component understanding 
    //     this.props.history.push('/details');

    // }
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/details'>Details</Link>
                {/* <button onClick={this.handleClick}>Clicked</button> */}
            </div>
        )
    }
}
export default Header;