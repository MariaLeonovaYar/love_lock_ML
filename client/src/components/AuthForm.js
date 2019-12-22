import React, {Component} from 'react';
import '../style/auth.css';

class AuthForm extends Component {
    render() {
        return (
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="email"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Пароль</label>
                    <input type="password" class="form-control" id="password"></input>
                </div>
                <div class="form-group">
                    <div class="main-checkbox">
                        <input value="None" id="checkbox1" name="check" type="checkbox"></input>
                        <label for="checkbox1"></label>
                    </div>
                    <span class="text">Запомнить</span>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-default">Войти</button>
                </div>
            </form>
        );
    }
} 

export default AuthForm;