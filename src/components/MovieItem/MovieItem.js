import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';



class MovieItem extends Component {



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
                    </Link>
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