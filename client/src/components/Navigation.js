import React, {Component} from 'react';
import '../style/css/bootstrap.min.css';

class Navigation extends Component {
  render() {
    return (
        <nav>
          <div class="btn-group-toggle" data-toggle="buttons">
            <a class="btn btn-outline-info" href="/">Домашняя</a>
            <a class="btn btn-outline-info" href="/Auth">Авторизация</a>
            <a class="btn btn-outline-info" href="/Register">Регистрация</a>
            <a class="btn btn-outline-info" href="/Page">Какая-то страница</a>
          </div>
        </nav>
    );
  }
}

export default Navigation;

