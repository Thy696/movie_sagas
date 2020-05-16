import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';



class Edit extends Component {

    state = {
        detail: {
            title: this.props.reduxState.details.title,
            description: this.props.reduxState.details.description
        }
    }

    componentDidMount() {
        console.log('in state from edit we have:', this.state)
        // this.handleSave();
    }

    handleCancel = () => {
        console.log('Back clicked!');
        this.props.history.push('/details');
    }

    handleSave = () => {
        console.log('Save clicked!');
        this.props.history.push('/details');

        this.props.dispatch({
            type: 'SUBMIT',
            payload : this.state
        })
        console.log('---------------> ',this.state)
    }

    handleChangeFor = (event, property) => {
        console.log('handle change for', property, event.target.value);
        this.setState({
            detail: {
                ...this.state.detail,
                [property]: event.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <p>This is Edit</p>

                <input type="text" placeholder="Edit Title"
                    onChange={(event) => this.handleChangeFor(event, 'title')}
                />
                <input type="text" placeholder="Edit Description"
                    onChange={(event) => this.handleChangeFor(event, 'description')}
                /><br />

                <button onClick={this.handleCancel}>Cancel</button>
                <button onClick={this.handleSave}>Save</button>

                {/* <p>state: {this.state.detail.title}</p>
                <p>state: {this.state.detail.description}</p> */}


                <p>title: {this.props.reduxState.details.title}</p>
                <p>description: {this.props.reduxState.details.description}</p>

                <ul>
                    {
                        this.props.reduxState.genres.map(item => {
                            return (
                                <li key={item.genres_id}>
                                    Movie title:{item.movie},
                                    Genres: {item.genres}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Edit);