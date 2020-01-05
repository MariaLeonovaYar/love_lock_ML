import React, {Component} from 'react';
import LockContent from "../components/LockContent";
import {getUserData} from "../api/UserData";
import {delete_lock_id} from "../api/DeleteLock";

class LockList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: [[]]
          };
    }

    reloadUserData = () => {
        getUserData("11").then((data) => {
            this.setState({'data': data});
        });
    };

    clickHandler(){
        console.log("Мы туту");
        const id_lock = 1;
        console.log(id_lock)
       delete_lock_id(id_lock);
    }

    clickGetHandler(){
        this.reloadUserData();
        let cardContent = (
            <div id="l-Text" class="l-Text">
                <p>Пользователь {this.state.data[0]}</p>
                <p>Дизайн {this.state.data[1]}</p>
                <p>Человек {this.state.data[2]}</p>
                <p>Сообщение {this.state.data[3]}</p>
                <p>Размер {this.state.data[4]}</p>
                <p>Индекс {this.state.data[5]}</p>
          </div>
        );
    }

    render() {   
       
        

        return (
            <div className="card" style={{width: '24rem' }}>
                <div className="form-group">
                  {/* {cardContent}
                  <button type="submit" class="btn btn-danger" onClick={this.clickGetHandler()}>Получить замок</button> */}
                  <button type="submit" class="btn btn-danger" onClick={this.clickHandler}>Удалить</button>
                </div>
            </div>
    );
    }
}

export default LockList;
