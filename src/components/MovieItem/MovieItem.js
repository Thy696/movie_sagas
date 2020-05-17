import React, { Component } from 'react';
import { Link, HashRouter, Switch,Route } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieItem extends Component {

    state = {
        genres:'',
    }


    //Use sendDetail function to send the title, description and genres to index by dispatch
    sendDetail = () => {
        this.props.dispatch({
            type: 'FETCH_DETAIL', // action type FETCH_DETAIL to send title and description
            payload: {
                title: this.props.movieData.title,
                description: this.props.movieData.description,
            }
        })

        this.props.dispatch({
            type: 'FETCH_GENRES',// action type FETCH_GENRES to send genres
            payload: this.props.movieData.genres,
        })
    }

    //set current state equal what user type in input field 
    handleChangeFor = (event) => {
        console.log('handle change for', event.target.value);
        this.setState({
            genres: event.target.value
        })
    }

    handleAdd = () =>{
        console.log('Added!')
        this.props.dispatch({
            type: "ADD_NEW_GENRES",
            payload: this.state
        })
    }


    render() {
        return (
            <div className="movie_item">
                <HashRouter>
                    {/* create an Link to bring the user to the Detail page
                 when the user click on this poster  */}
                    <p>{this.props.movieData.title}</p>
                    <Link to='/details'>
                        <img
                            src={this.props.movieData.poster}
                            alt={this.props.movieData.title}
                            onClick={this.sendDetail}
                        />
                    </Link><br />
                    <input type = "text" placeholder = "new a genres"
                    onChange = {this.handleChangeFor}
                    />
                    <button onClick = {this.handleAdd}>Add</button>                    
                    {/* Display genres  */}
                    <p>Genres: {this.props.movieData.genres[0]},{this.props.movieData.genres[1]}</p>
                    {/* Display description  */}
                    <p>{this.props.movieData.description}</p>
                    
                </HashRouter>
            </div >
        )
    }
}
// put the reduxState on property to able to 
//call the data from index.js in this component
// const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect()(MovieItem);