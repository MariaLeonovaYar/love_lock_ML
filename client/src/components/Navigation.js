import React, {Component} from 'react';
import '../style/css/bootstrap.min.css';
import '../style/index.css';
import Auth from './Auth';


function Menu(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserMenu />;
  }
  return <GuestMenu/>;
}

function UserMenu() {
   return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="btn-group-toggle" data-toggle="buttons">
        <a class="navbar-brand" href="/">Выход |</a>
        <a class="navbar-brand" href="/LockList">Замки |</a>
        <a class="navbar-brand" href="/Start">Домашняя страница |</a>
        <a class="navbar-brand" href="/Lock">Повесить замочек на мост|</a>
        <a class="navbar-brand" href="/LockList">Список твоих замочков</a>
        <a class="navbar-brand" href="/LockContent">ЛокКонтент</a>

      </div>
    </nav>
   )
}

function GuestMenu() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="btn-group-toggle" data-toggle="buttons">
        <a class="navbar-brand" href="/Auth">Авторизация |</a>
        <a class="navbar-brand" href="/Register">Регистрация |</a>
        <a class="navbar-brand" href="/Start">Домашняя страница |</a>
        <a class="navbar-brand" href="/Lock">Повесить замочек на мост|</a>
        <a class="navbar-brand" href="/LockList">Список твоих замочков</a>
        <a class="navbar-brand" href="/LockContent">ЛокКонтент</a>

      </div>
    </nav>
  )
}

class Navigation extends  Component  {
    constructor(props) {
      super(props);
        this.state = {
          isLoggedIn: this.props.isLoggedIn
        };
    }

  render() {
    return (
        <Menu isLoggedIn = {this.state.isLoggedIn}/>
    );
  }
}

export default Navigation;



