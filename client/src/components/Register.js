import React, {Component} from 'react';
import { Route, Link} from 'react-router-dom';
import '../style/auth.css';
import {sendInputValue} from "../api/InputValues";


class Register extends Component {
    clickHandler() {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log(name, surname, email, password)
        sendInputValue(name, surname, email, password);
    }
    render() {
        return (
                <div class="container">
                    <div class="row">                
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Имя</label>
                                    <input type="text" id="name" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Фамилия</label>
                                    <input type="text" id="surname" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="text" id="email" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Пароль</label>
                                    <input type="text" id="password" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-default" onClick={this.clickHandler}>Зарегистрироваться</button>
                                </div>
                            </div> 
                        </div>  
                    </div> 
                </div>
            // <div>
            //     <input type="radio" value="ann" name = "name" id="name"></input>
            //     <input type="radio" value="kate" name = "name" id="name"></input>
            //     <p>
            //     <input type="radio" value="smirnova" name = "surname" id="surname"></input>
            //     <input type="radio" value="petrova" name = "surname" id="surname"></input>
            //     </p>
            // <p>
            //      <label>Email</label>
            //      <input type="text" id = "email"></input> 
            // </p>
            // <p>
            //      <label>Пароль</label>
            //      <input type="password" id="password"></input> 
            // </p>  
            // <div>
            //     <button onClick={this.clickHandler}>Submit</button>
            // </div>
            // </div>
        );
    }   
}
export default Register;
