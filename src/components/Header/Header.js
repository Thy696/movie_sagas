import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import {withRouter} from 'react-router';

class Header extends Component {
    handleClick = () => {
        // handle next button to moving to component understanding 
        this.props.history.push('/');
    }

    render() {

        return (
            <div className = "header">

                <h1 onClick = {this.handleClick}
                className = "header_text"
                >Thy's movie list</h1>

            </div>
        )
    }
}
export default withRouter(Header);
