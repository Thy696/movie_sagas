import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';


class Edit extends Component {
    //create an state to store data that we get from reducer details in index.js
    state = {
        detail: {
            title: '',
            description: ''
        },
        cancelButton: true,
        saveButton: true,
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
        this.setState({
            // descriptionVisible: true // when the picture have been click,descriptionVisible will switch to true and show it up 
            cancelButton: !this.state.cancelButton, // when the picture have been click,descriptionVisible will switch to true and show it up 
            saveButton: !this.state.saveButton, // when the picture have been click,descriptionVisible will switch to true and show it up 

        })
        this.clearInputField();
    }

    backToDetail = () => {
        this.props.history.push('/details/:id');
    }

    clearInputField = () => {
        this.setState({
            detail: {
                title: '',
                description: ''
            },
        })
    }

    render() {

        let cancelButton;
        let saveButton;
        if (this.state.cancelButton) { // use the condition if to hide cancel button if the user click on save button
            cancelButton = (<button onClick={this.handleCancel}>Cancel</button>)
        }
        if (this.state.saveButton) {  // use the condition if to hide save button if the user click on save button
            saveButton = (<button onClick={this.handleSave}>Save</button>
            )
        }


        return (

            <div className="edit_wrap">
                <Paper elevation={3}>
                    <div className="edit_content">
                        <input type="text" placeholder="Edit Title"
                            value={this.state.detail.title}
                            onChange={(event) => this.handleChangeFor(event, 'title')}
                        />
                        <input type="text" placeholder="Edit Description"
                            value={this.state.detail.description}
                            onChange={(event) => this.handleChangeFor(event, 'description')}
                        /><br />

                        {cancelButton}
                        {saveButton}
                        {/* <button onClick={this.handleSave}>Save</button> */}
                        <button onClick={this.backToDetail}>Back To Detail</button>

                        <h3>Title: {this.props.reduxState.details.title}</h3>

                        {/* loop through the array genres that we got from reducer genres to display index on DOM */}
                        {this.props.reduxState.genres.map(item => {
                            return (
                                <span key={item}> {item}</span>
                            )
                        })
                        }
                        <p>Description: {this.props.reduxState.details.description}</p>
                    </div>
                </Paper>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Edit);