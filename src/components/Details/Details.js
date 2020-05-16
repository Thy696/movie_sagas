import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    handleBack = () => {
        console.log('Back clicked!');
        this.props.history.push('/');
    }
  
    render() {
        return (
            <div>
                <button onClick={this.handleBack}>Back to list</button>

                <p>{this.props.reduxState.details.title}</p>
                <p>{this.props.reduxState.details.description}</p>
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