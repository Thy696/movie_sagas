import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';



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

    useStyles = () => {
        makeStyles((theme) => ({
            root: {
                flexGrow: 1,

            },
            paper: {
                height: 140,
                width: 100,
                color: theme.palette.text.secondary,
            },
            control: {
                padding: theme.spacing(2),
            },
        }))
    };

    render() {

        const classes = this.useStyles;

        return (
            <div>
                {/* mapping through the array movies that got from index to append list of movies to DOM */}

                <Grid className={classes.root}>
                    <Grid container justify="center" >
                        {this.props.reduxState.movies.map((movie) => (
                            <Grid key={movie} item xs={2} >
                                <Paper className={classes.paper} >
                                    <MovieItem // Connnect MovieItem component
                                        movieData={movie} //send the data parameter to MovieItem 
                                    />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* <h1>{JSON.stringify(this.props.reduxState.movies)}</h1> */}
            </div>
        )
    }
}
// // put the reduxState on property to able to 
// //call the data from index.js in this component
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Home);