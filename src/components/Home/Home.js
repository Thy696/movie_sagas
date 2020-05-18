import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem'
import SearchMovieItem from '../SearchMovieItem/SearchMovieItem';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';




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

    state = {
        searchValue: ''
    };

    handleChangeFor = (event) => {
        console.log('in handleChange:', event.target.value);
        this.setState({
            searchValue: event.target.value
        });// end setState   
    }

    clearInputField = () => {
        this.setState({
            searchValue: '',
        })
    }

    handleSearch = () => {
        console.log('in handleClick');
        this.props.dispatch({
            type: 'SEARCH',
            payload: this.state.searchValue
        });// end dispatch
        // console.log(' search this : ', this.state.searchValue)
        this.clearInputField();
    };// end handleSearch

  
   
    keyPressed = (event) => {
        if (event.key === "Enter") {
            this.handleSearch();
        }
    }
    render() {


        return (
            <div>
                <SearchIcon />
                <Input type="text" placeholder="Search movie"
                    onChange={this.handleChangeFor}
                    onKeyPress={this.keyPressed}
                ></Input>

                <Grid className="search_result">
                    <Grid container justify="center" >
                        {this.props.reduxState.search.map((searchMovie) => (
                            <Grid item xs={3} >
                                <div className="card_movie" key={searchMovie.id}>
                                    <Paper>
                                        <SearchMovieItem // Connnect MovieItem component
                                            movieData={searchMovie} //send the data parameter to MovieItem 
                                        />
                                    </Paper>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                {/* mapping through the array movies that got from index to append list of movies to DOM */}
                <div className="list_movie">
                    <Grid>
                        <Grid container justify="center" >
                            {this.props.reduxState.movies.map((movie) => (
                                <Grid item xs={3} >
                                    <div className="card_movie" key={movie.id}>
                                        <Paper>
                                            <MovieItem // Connnect MovieItem component
                                                movieData={movie} //send the data parameter to MovieItem 
                                            />
                                        </Paper>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </div>
                {/* <h1>{JSON.stringify(this.props.reduxState.movies)}</h1> */}
            </div>
        )
    }
}
// // put the reduxState on property to able to 
// //call the data from index.js in this component
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Home);