import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genres from '../Genres/Genres';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


class Admin extends Component {
    state = {
        loginForm: {
            username: '',
            password: ''
        },
        addGenresForm: false,
        genres: '',
    }
    // keyPressed = (event) => {
    //     if (event.key === "Enter") {
    //         this.handleSubmit();
    //     }
    // }

    componentDidMount() {
        this.getGenres(); // run the GET request
    }

    //GET request and send action type back index.js via dispatch 
    getGenres() {
        this.props.dispatch({
            type: 'GET_GENRES_FROM_DATABASE',
        })
    }
    //---------------------------Login form------------------------------------------------------------------------
    handleChangeFor = (event, property) => { //create handleChangeFor function and call it when the input field changes
        this.setState({
            loginForm: {
                ...this.state.loginForm, //set loginForm object is what it is
                [property]: event.target.value, // change it after the user type in input field
            }
        });
    }

    handleSubmit = (event) => { // called when the add new picture is pressed
        console.log('submit clicked!');
        if (this.state.loginForm.username === '' || this.state.loginForm.password === '') {
            alert("Make sure you added your username and password!")
        } else {
            this.clearUrlFields();
            //set add new genres form to be true when the user click on login button 
            this.setState({
                addGenresForm: !this.state.addGenresForm,

            })
        }
    }

    clearUrlFields = () => {// clear the field of the form reseting the url
        this.setState({
            loginForm: {
                username: '',
                password: ''
            },
        });
    }
    //---------------------------Add new genres form------------------------------------------------------------------------

    handleGenresChange = (event) => { //create handleChangeFor function and call it when the input field changes
        this.setState({
            genres: event.target.value, // change it after the user type in input field
        });
    }

    handleAdd = (event) => { // called when the add new picture is pressed
        console.log('Add clicked!');
        if (this.state.genres === '') {
            alert("Please add an genres in input field!")
        } else {
            this.clearUrlFields();
            this.props.dispatch({
                type: 'ADD_NEW_GENRES',
                payload: this.state.genres
            })
            this.clearInputField();
        }
    }

    clearInputField = () => {
        this.setState({
            genres: '',
        })
    }


    //---------------------------Remove genres------------------------------------------------------------------------


    render() {
        let addNewGenresForm;
        if (this.state.addGenresForm) { // use the condition if to show add new genres form 
            addNewGenresForm = (
                <div>
                    <form className="genresForm form">
                        <Input type="text" placeholder="Add new genres"
                            onChange={this.handleGenresChange} />
                        <Button onClick={this.handleAdd} variant="contained" >Add</Button>
                    </form>
                    <div className="genres_admin">
                        <h5>Genres list:</h5>
                        {this.props.reduxState.genresDatabase.map(genresDatabase => {
                            return (
                                <div key={genresDatabase.id}>
                                    <Genres
                                        genresDatabase={genresDatabase}

                                    />
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            )
        }

        return (
            <div >
                <form onSubmit={this.handleSubmit}
                    className="submitForm form"  >
                    <Input
                        value={this.state.loginForm.username}
                        placeholder='username'
                        onChange={(event) => this.handleChangeFor(event, 'username')}
                        className="input input-username"
                        id="mui-theme-provider-standard-input"
                    /><br />

                    <Input
                        type="password"
                        value={this.state.loginForm.password}
                        placeholder='password'
                        onChange={(event) => this.handleChangeFor(event, 'password')}
                        className="input input-password"
                        id="mui-theme-provider-standard-input"
                    // onKeyPress={this.keyPressed}
                    /><br />
                    <br />
                    <Button variant="contained"
                        type="submit"
                        className="login-btn btn"
                    >Login
                        </Button>
                </form>
                {addNewGenresForm}

            </div>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Admin);