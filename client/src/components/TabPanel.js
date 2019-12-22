import React, {Component} from 'react';
import '../style/auth.css';

class TabPanel extends Component {
    render() {
        return (
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">Войти</a></li>
                <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">Регистрация</a></li>
            </ul>            
        );
    }
}

export default TabPanel;
