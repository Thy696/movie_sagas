import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    state = {
        title: this.props.reduxState.details.title,
        description: this.props.reduxState.details.description
    }

    handleBack = () => {
        console.log('Back clicked!');
        this.props.history.push('/');
    }
    handleEdit = () => {
        console.log('Back clicked!');
        this.props.history.push('/edit');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleBack}>Back to list</button>
                <button onClick={this.handleEdit}>Edit</button>


                <p>{this.state.title}</p>
                <p>{this.state.description}</p>
                <ul>
                    {
                        this.props.reduxState.genres.map(item => {
                            return (
                                <li key={item.genres_id}>
                                    Movie title:{item.movie}, 
                                    Genres: {item.genres}</li>
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