import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';





class Details extends Component {
    //create an state to store data that we get from reducer details in index.js
    state = {
        title: this.props.reduxState.details.title,
        description: this.props.reduxState.details.description
    }
    //handle click when user click on Back To List button
    handleBack = () => {
        console.log('Back clicked!');
        this.props.history.push('/'); // bring user back to home page
    }

    //handle click when user click on Edit button
    handleEdit = () => {
        console.log('Back clicked!');
        this.props.history.push('/edit'); // bring user to edit page
    }

    //set current state equal what user type in input field 
    handleChangeFor = (event) => {
        console.log('handle change for', event.target.value);
        this.setState({
            genres: event.target.value
        })
    }

    handleAdd = () => {
        console.log('Added!')
        this.props.dispatch({
            type: "ADD_NEW_GENRES",
            payload: this.state
        })
    }



    render() {

        return (
            <div className="detail_wrap">
                <Paper elevation={3}>
                    {/* the buttons */}
                    <div className="detail_content">

                        <button onClick={this.handleBack}>Back to list</button>
                        <button onClick={this.handleEdit}>Edit</button>

                        <h3>{this.state.title}</h3>

                        <div>
                    {/* //mapping through genres array that we got from reducer genres */}
                            {this.props.reduxState.genres.map(item => {
                                return (
                                    <span key={item}>{item} </span>
                                )
                            })
                            }
                        </div>
                        <p>{this.state.description}</p>

                        <input type="text" placeholder="new a genres"
                            onChange={this.handleChangeFor}
                        />
                        <button onClick={this.handleAdd}>Add</button>

                    </div>

                </Paper>

            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Details);