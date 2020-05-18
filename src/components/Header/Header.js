import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import {withRouter} from 'react-router';

class Header extends Component {
    handleClick = () => {
        // handle next button to moving to component understanding 
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="header">
                <h1 onClick={this.handleClick} className="header_text">Thy's movie list</h1>
            </div>
        )
    }
}
// export default withRouter(Header);
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default withRouter(connect(putReduxStateOnProps)(Header));