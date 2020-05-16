import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';



class MovieItem extends Component {

    componentDidMount() {
        this.getGenres();
    }

    //Use sendDetail function to send the title and description to index by dispatch
    sendDetail = () => {
        this.props.dispatch({
            type: 'FETCH_DETAIL',
            payload: {
                title: this.props.movieData.title,
                description: this.props.movieData.description
            }
        })
    }

    getGenres = () => {
        console.log('get dispatch send!');
        this.props.dispatch({
            type: 'FETCH_GENRES',
            payload: this.props.movieData.id

        })
    }


    render() {
        return (
            <div className="movie_item">
                <HashRouter>
                    {/* create an Link to bring the user to the Detail page
                 when the user click on this poster  */}
                    <p>{this.props.movieData.id}</p>

                    <Link to='/detail'>
                        <img
                            src={this.props.movieData.poster}
                            alt={this.props.movieData.title}
                            onClick={this.sendDetail}
                        />
                    </Link>
                    <p>{this.props.movieData.title}</p>
                    <p>{this.props.movieData.description}</p>

                </HashRouter>

                {/* <h1>{JSON.stringify(this.props.reduxState.movies)}</h1> */}
            </div >
        )
    }
}
// put the reduxState on property to able to 
//call the data from index.js in this component
// const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect()(MovieItem);