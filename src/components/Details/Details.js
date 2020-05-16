import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    componentDidMount() {
        this.getGenres();
    }


    handleBack = () =>{
        console.log('Back clicked!');
        this.props.history.push ('/');
    }


    getGenres = () => {
        console.log('get dispatch send!');
        this.props.dispatch({
            type: 'FETCH_GENRES',
            
        })
    }

    render() {
        return (
            <div>
                {/* <h1>Details</h1> */}
                
                {/* <ul>
                    {this.props.reduxState.genres.map((item) =>
                        <li key={item.id}>Movie title: {item.title}, Genres: {item.name}</li>

                    )}
                </ul> */}
                <ul>
                    {
                        this.props.reduxState.genres.map(item => {
                            return (
                                <li key={item.genres_id}>Movie title:{item.title}, Genres: {item.name}</li>
                            )
                        })
                    }
                </ul>
                <button onClick = {this.handleBack}>Back to list</button>
                <p>{this.props.reduxState.details.title}</p>
                <p>{this.props.reduxState.details.description}</p>

            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Details);