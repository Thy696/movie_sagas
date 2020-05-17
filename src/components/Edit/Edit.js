import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    //create an state to store data that we get from reducer details in index.js
    state = {
        detail: {
            title: this.props.reduxState.details.title,
            description: this.props.reduxState.details.description
        }
    }

    componentDidMount() {
        console.log('in state from edit we have:', this.state)
        // this.handleSave();
    }

    //Bring the user back to details page when the user click on Cancel button, 
    handleCancel = () => {
        console.log('Back clicked!');
        this.props.history.push('/details');
    }

    //set current state equal what user type in input field 
    handleChangeFor = (event, property) => {
        console.log('handle change for', property, event.target.value);
        this.setState({
            detail: {
                ...this.state.detail,
                [property]: event.target.value
            }
        })
    }

    //Bring the user back to details page when the user click on Cancel button and
    // create a SUBMIT action to submit the changing
    handleSave = () => {
        console.log('Save clicked!');
        // this.props.history.push('/details');
        this.props.dispatch({
            type: 'SUBMIT',
            payload: this.state // set payload = data in state after changing
        })
        // console.log('---------------> ', this.state)
    }

    backToDetail = () => {
        this.props.history.push('/details/:id');

    }

    render() {
        return (
            <div>
                <h2>Edit</h2>
                <input type="text" placeholder="Edit Title"
                    onChange={(event) => this.handleChangeFor(event, 'title')}
                />
                <input type="text" placeholder="Edit Description"
                    onChange={(event) => this.handleChangeFor(event, 'description')}
                /><br />

                <button onClick={this.handleCancel}>Cancel</button>
                <button onClick={this.handleSave}>Save</button>
                <button onClick={this.backToDetail}>Back To Detail</button>


                <p>title: {this.props.reduxState.details.title}</p>
                <p>description: {this.props.reduxState.details.description}</p>

                <ul>
                    {/* loop through the array genres that we got from reducer genres to display index on DOM */}
                    {this.props.reduxState.genres.map(item => {
                        return (
                            <li key={item}> {item}</li>

                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Edit);