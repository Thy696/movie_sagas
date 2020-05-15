import React, { Component } from 'react';
import { Link, Router, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Detail from '../Details/Details';



class MovieItem extends Component {

    componentDidMount() {
        console.log('in movie item', this.props);
    }

    //create an handleClick function to bring the user to the Detail page 
    //where have the detail of the movie that they clicked on that movie's poster
    // handleClick = () => {
    //     console.log('clicked!!!');
    //     this.props.history.push('/');
    // }
    // handleClick = () => {        
    //         // handle next button to moving to component understanding 
    //         this.props.history.push('/details');

    // }

    render() {
        return (
            <div className="movie_item">
                <HashRouter>
                    <Link to='/details'> 
                    <img
                        src={this.props.movieData.poster}
                        arl={this.props.movieData.title}
                    /></Link>
                    <p> {this.props.movieData.title}</p >
                    <p>{this.props.movieData.description}</p>
                </HashRouter>



                {/* <h1>{JSON.stringify(this.props.reduxState.movies)}</h1> */}
            </div >
        )
    }
}
// put the reduxState on property to able to 
//call the data from index.js in this component
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(MovieItem);