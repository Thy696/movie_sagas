import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import {withRouter} from 'react-router';

class Header extends Component {

    state = {
        searchValue: ''
    };

    // componentDidMount() {
    //     this.handleSearch();
    // }

    handleClick = () => {
        // handle next button to moving to component understanding 
        this.props.history.push('/');
    }

    handleChangeFor = (event) => {
        console.log('in handleChange:', event.target.value);
        this.setState({
            searchValue: event.target.value
        });// end setState   
    }

    handleSearch = () => {
        console.log('in handleClick');
        this.props.dispatch({
            type: 'SEARCH',
            payload: this.state.searchValue
        });// end dispatch
        // console.log(' search this : ', this.state.searchValue)

    };// end handleSearch

    render() {

        return (
            <div className="header">
                <h1 onClick={this.handleClick} className="header_text">Thy's movie list</h1>
                <input type="text" placeholder="Search movie"
                    onChange={this.handleChangeFor}
                ></input>
                <button onClick={this.handleSearch}
                >Search</button>

            </div>
        )
    }
}
// export default withRouter(Header);
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default withRouter(connect(putReduxStateOnProps)(Header));