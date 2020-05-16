import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';



class MovieItem extends Component {

    componentDidMount() {
        // console.log('in movie item', this.props);
        // console.log('-----', this.props.movieData.title);
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



    render() {
        return (
            <div className="movie_item">
                <HashRouter>
                    {/* create an Link to bring the user to the Detail page
                 when the user click on this poster  */}
                    <Link to='/details'>
                        <img
                            src={this.props.movieData.poster}
                            alt={this.props.movieData.title}
                            onClick={this.sendDetail}
                        />
                    </Link>
                    <p>{this.props.movieData.title}</p>
                    <p>{this.props.movieData.description}</p>
                    {/* <Route path='/details'
                        render={(props) => <Details {...props}
                            title={this.props.movieData.title}
                            description={this.props.movieData.description}
                        />}
                    /> */}

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