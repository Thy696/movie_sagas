import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem'


class Home extends Component {
    // create component did mount to append what we got from database to DOM
    componentDidMount() {
        this.getMovies(); // run the GET request
    }

    //GET request and send action type back index.js via dispatch 
    getMovies() {
        this.props.dispatch({
            type: 'FETCH_MOVIES',
        })
    }
    render() {
        return (
            <div>
                {/* <Link to='/'>Home</Link> */}
                <h1>This is home</h1>
                {/* mapping through the array movies that get from index to append list of movies to DOM */}
                {this.props.reduxState.movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <MovieItem // Connnect MovieItem component
                            movieData = {movie} //send the data parameter to MovieItem 
                            />
                        </div>
                    )
                })}
                {/* <h1>{JSON.stringify(this.props.reduxState.movies)}</h1> */}
            </div>
        )
    }
}
// // put the reduxState on property to able to 
// //call the data from index.js in this component
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Home);