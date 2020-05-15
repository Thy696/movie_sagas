import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class MovieItem extends Component {
  
    render() {
        return (
            <div className = "movie_item">
                <img src = {this.props.movieData.poster} 
                arl = {this.props.movieData.title} />
                <p>{this.props.movieData.title}</p>
                <p>{this.props.movieData.description}</p>


                {/* <h1>{JSON.stringify(this.props.reduxState.movies)}</h1> */}
            </div>
        )
    }
}
// put the reduxState on property to able to 
//call the data from index.js in this component
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(MovieItem);