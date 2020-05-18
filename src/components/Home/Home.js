import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem'

// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';

import SearchMovieItem from '../SearchMovieItem/SearchMovieItem';



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

    // useStyles = () => { makeStyles( (theme) => ({
    //         root: {
    //             flexGrow: 1,
    //         },
    //         paper: {
    //             height: 1,
    //             width: 10,
    //             color: theme.palette.text.secondary,
    //         },
    //         control: {
    //             padding: theme.spacing(2),
    //         },
    //     }))
    // };

    render() {

        // const useStyles = makeStyles((theme) => ({
        //     root: {
        //       flexGrow: 1,
        //     },
        //     paper: {
        //       height: 140,
        //       width: 100,
        //     },
        //     control: {
        //       padding: theme.spacing(2),
        //     },
        //   }));

        // const classes = useStyles();

        return (
            <div>
                 <Grid>
                        <Grid container justify="center" >
                            {this.props.reduxState.search.map((searchMovie) => (
                                <Grid  item xs={3} >
                                    <div className="card_movie" key={searchMovie}>
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
                                <Grid  item xs={3} >
                                    <div className="card_movie" key={movie}>
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