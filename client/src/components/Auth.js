import React, {Component} from 'react';
import {sendInputValue} from "../api/InputValues";
import AuthForm from "./AuthForm";
import '../style/auth.css';


class Auth extends Component {
    clickHandler() {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        sendInputValue(name, surname, email, password);
    }

    render() {
        return (
        <div class="container">
            <div class="row">
                
                    <div class="card">
                        <div class="card-body">
                            <AuthForm/>
                        </div>                   
                </div>
            </div>
        </div>
        );
    }   
}
export default Auth;
