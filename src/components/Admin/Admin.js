import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

class Admin extends Component {
    state = {
        loginForm: {
            username: '',
            password: ''
        },
        addGenresForm: false
    }
    keyPressed = (event) => {
        if (event.key === "Enter") {
            this.props.handleSubmit()
        }
    }

    handleChangeFor = (event, property) => { //create handleChangeFor function and call it when the input field changes
        this.setState({
            loginForm: {
                ...this.state.loginForm, //set currentPicture object is what it is
                [property]: event.target.value, // change it after the user type in input field
            }
        });
    }

    handleSubmit = (event) => { // called when the add new picture is pressed
        console.log('submit clicked!');
        if (this.state.loginForm.username === '') {
            alert("Please, add an url into the form!")
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

    render() {
        let addNewGenresForm;
        if (this.state.addGenresForm) { // use the condition if to show add new genres form 
            addNewGenresForm = (
                <div>
                    <form className="genresForm form">
                        <input type="text" placeholder="Add new genres" />
                        <button>Add</button>
                    </form>

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
                        onKeyPress={this.keyPressed}

                    /><br />

                    <button variant="contained"
                        type="submit"
                        className="login-btn btn"
                    >Login
                        </button>
                </form>
                {addNewGenresForm}
            </div>
        );
    }
}

export default Admin;
