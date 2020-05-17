import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
                <Link to='/edit'>Edit</Link>


            </div>
        )
    }
}
export default Header;
