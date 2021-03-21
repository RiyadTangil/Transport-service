import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Header from '../Header/Header';
import {Button } from 'react-bootstrap';
import './login.css'

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isPasswordMatch, setIsPasswordMatch] = useState({});
    var gooogleProvider = new firebase.auth.GoogleAuthProvider();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(gooogleProvider)
            .then((result) => {
                const { displayName, Email } = result.user;
                const newUser = { Name: displayName, Email: Email };
                setLoggedInUser(newUser);
                history.replace(from);
                console.log(displayName, loggedInUser);

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }



    let [newUser, setNewUser] = useState(false)
    const hasNumber = input => /\d/.test(input);

    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === 'Email') {
            isFormValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value)

        }
        if (event.target.name === 'password') {
            let password = { ...isPasswordMatch }
            password[event.target.name] = event.target.value
            setIsPasswordMatch(password);
            isFormValid = event.target.value.length > 8 && hasNumber(event.target.value);
        }
        if (event.target.name === "confirmPassword") {

            isFormValid= isPasswordMatch.password === event.target.value;

            console.log("is form valid3", loggedInUser.password);
        }
        if (isFormValid) {
            let newUser = { ...loggedInUser }
            newUser[event.target.name] = event.target.value
            setLoggedInUser(newUser)
            console.log('newuser', newUser);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loggedInUser.Email, loggedInUser.password);
        if (newUser && loggedInUser.Email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.Email, loggedInUser.password)
                .then((res) => {
                    let newUserInfo = { ...loggedInUser }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setLoggedInUser(newUserInfo)
                    history.replace(from);
                    updateUserName(loggedInUser.name)
                    console.log('sign in user', res.user, newUserInfo);
                })
                .catch((error) => {
                    let newUserInfo = { ...loggedInUser }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setLoggedInUser(newUserInfo)
                });
        }
        if (!newUser && loggedInUser.Email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.Email, loggedInUser.password)
                .then((userCredential) => {
                    let newUserInfo = { ...loggedInUser }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setLoggedInUser(newUserInfo)
                    history.replace(from);

                })
                .catch((error) => {
                    let newUserInfo = { ...loggedInUser }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setLoggedInUser(newUserInfo)
                });
        }
    }
    const updateUserName = (name) => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            console.log(error);
        });
    }





    return (
        <div>
            <Header>
            <Button variant="outline-info">login</Button>
            </Header>

            <div>

                <div className="App login-form ">

                    <form className="from-info" onSubmit={handleSubmit} action="">
                        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="newUser" /> <br />
                        <label htmlFor="newUser">New User</label><br />
                        {newUser && <input type="text" required onBlur={handleBlur} placeholder="type your name" name="name" id="" />}
                        <br />
                        <input type="text" required onBlur={handleBlur} placeholder="type your Email" name="Email" id="" /><br />
                        <input type="password" required onBlur={handleBlur} name="password" id="" placeholder="type your pass" /><br />
                        {newUser && <input type="password" required onBlur={handleBlur} name="confirmPassword" id="" placeholder="confirm password" />}<br/>
                        <input type="submit" value="submit" />
                    </form>

                    <p style={{ color: 'red' }}>{loggedInUser.error}</p>
                    {
                        loggedInUser.success && <p style={{ color: 'green' }}>Successfully {newUser ? 'sign up' : 'logged In'}</p>
                    }
                </div>
                <div className="justify-content-center d-flex">
                    <button onClick={handleGoogleSignIn}>sign in with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;