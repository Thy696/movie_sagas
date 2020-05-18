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

        return (

            <div className="edit_wrap">
                <Paper elevation={3}>
                    <div className="edit_content">
                        <div className="edit_item">
                            <TextField type="text" placeholder="Edit Title"
                                value={this.state.detail.title}
                                variant="outlined"
                                label="Title"
                                onChange={(event) => this.handleChangeFor(event, 'title')} />                            <br />
                            <br />
                            <TextField type="text" placeholder="Edit Description"
                                variant="outlined"
                                value={this.state.detail.description}
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={10}
                                variant="outlined"
                                onChange={(event) => this.handleChangeFor(event, 'description')} />                            <br />
                            <br />
                            <Button variant="contained" onClick={this.handleCancel}>Cancel</Button>
                            <Button variant="contained" onClick={this.handleSave}>Save</Button>
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