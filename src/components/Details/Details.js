import React, { Component } from 'react';
import { connect } from 'react-redux';



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

    render() {
        return (
            <div>
                <h2>Detail</h2>
                {/* the buttons */}
                <button onClick={this.handleBack}>Back to list</button>
                <button onClick={this.handleEdit}>Edit</button>

                <p>{this.state.title}</p>
                <p>{this.state.description}</p>
                <ul>Genres:
                    {/* //mapping through genres array that we got from reducer genres */}
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
export default connect(putReduxStateOnProps)(Details);