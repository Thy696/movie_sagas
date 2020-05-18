import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';





class Edit extends Component {
    //create an state to store data that we get from reducer details in index.js
    state = {
        detail: {
            title: this.props.reduxState.details.title,
            description: this.props.reduxState.details.description
        },
        cancelButton: true,
        saveButton: true,
        inputTitle: true,
        inputDescription: true
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
        this.props.history.push('/details');
        this.props.dispatch({
            type: 'SUBMIT',
            payload: this.state // set payload = data in state after changing
        })
        //set save and cancel button to false to hide save button and cancel button after the user click submit
        this.setState({
            // descriptionVisible: true // when the picture have been click,descriptionVisible will switch to true and show it up 
            cancelButton: !this.state.cancelButton, // when the picture have been click,descriptionVisible will switch to true and show it up 
            saveButton: !this.state.saveButton, // when the picture have been click,descriptionVisible will switch to true and show it up 
            inputTitle: !this.state.inputTitle,
            inputDescription: !this.state.inputDescription
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
        const classes = this.styles;


        // use the if conditions to hide cancel button, save button, title input, description input if the user click on save button
        let cancelButton;
        let saveButton;
        let titleInput;
        let descriptionInput;
        if (this.state.cancelButton) {
            cancelButton = (<Button variant="contained" onClick={this.handleCancel}>Cancel</Button>)
        }
        if (this.state.saveButton) {
            saveButton = (<Button variant="contained" onClick={this.handleSave}>Save</Button>)
        }
        if (this.state.inputTitle) {
            titleInput = (<TextField type="text" placeholder="Edit Title"
                value={this.state.detail.title}
                variant="outlined"
                label="Title"
                onChange={(event) => this.handleChangeFor(event, 'title')} />)
        }
        if (this.state.inputDescription) {
            descriptionInput = (<TextField type="text" placeholder="Edit Description"
                variant="outlined"
                value={this.state.detail.description}
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={10}
                variant="outlined"
                onChange={(event) => this.handleChangeFor(event, 'description')} />)
        }



        return (

            <div className="edit_wrap">
                <Paper elevation={3}>
                    <div className="edit_content">
                        <div className="edit_item">
                            {titleInput}
                            <br />
                            <br />
                            {descriptionInput}
                            <br />
                            <br />
                            {cancelButton}
                            {saveButton}
                        </div>
                        <br />
                        <br />
                        {/* loop through the array genres that we got from reducer genres to display index on DOM */}
                        Genres: {this.props.reduxState.genres.map(item => {
                            return (
                                <span key={item}> {item}</span>
                            )
                        })
                        }
                    </div>
                </Paper>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Edit);