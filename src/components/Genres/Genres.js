import React, { Component } from 'react';
import { connect } from 'react-redux';

class Genres extends Component {

    //Sending the id of specific genres to index.js to create a remove request to database 
    handleRemove = () => {
        this.props.dispatch({
            type: 'REMOVE_GENRES',
            payload: this.props.genresDatabase.id,
        })
    }

    render() {
        return (
            <div >
                <span >{this.props.genresDatabase.name}</span>
                <button onClick={this.handleRemove}>Remove</button>
            </div>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Genres);