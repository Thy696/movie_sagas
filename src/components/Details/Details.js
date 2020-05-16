import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    state = {
        title: this.props.reduxState.details.title,
        description: this.props.reduxState.details.description
    }

    handleBack = () => {
        console.log('Back clicked!');
        this.props.history.push('/');
    }
    handleEdit = () => {
        console.log('Back clicked!');
        this.props.history.push('/edit');
    }

    componentDidMount() {
        this.getGenres();
        // this.sendDetail();
    }

    getGenres = () => {
        console.log('get dispatch send!');
        this.props.dispatch({
            type: 'FETCH_GENRES',
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleBack}>Back to list</button>
                <button onClick={this.handleEdit}>Edit</button>


                <p>{this.state.title}</p>
                <p>{this.state.description}</p>
                <ul>Genres: 
                    {
                        this.props.reduxState.genres.map(item => {
                            return (
                                <li key={item}> {item}</li>
                            )
                        })
                    }
                </ul>
                {/* <p>genres: {this.props.reduxState.genres}</p> */}
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Details);