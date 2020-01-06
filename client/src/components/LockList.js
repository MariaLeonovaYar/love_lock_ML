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
        console.log("Запрос на получение данных..");
        getUserData("11").then((data) => {
            this.setState({'data': data});
        });
        
    };

    // clickDeleteHandler(id_lock){
    //     console.log("Запрос на удаление данных..");
    //   //  const id_lock = this.state.data[5];
    //     console.log(id_lock)
    //   // delete_lock_id(id_lock);
    // }

    render() {   
      let cardContent;
        if (typeof this.state.data == "undefined"){
             cardContent = (
                <div id="l-Text" class="l-Text">
                    <p>У вас нет замочка.</p>
              </div>
            );
        }

        else {
           
            if (this.state.data[1] === "yellow")
            {
                cardContent = (
                    <div id="l-Text" class="l-Text">
                        <p>Пользователь: {this.state.data[0]}</p>
                        <p>Дизайн:<img className="image" src={require('../style/img/замок3.png')}/></p>
                        <p>Человек: {this.state.data[2]}</p>
                        <p>Сообщение: {this.state.data[3]}</p>
                        <p>Размер: {this.state.data[4]}</p>
                  </div>
                );
            }
            if (this.state.data[1] === "blue")
            {
                cardContent = (
                    <div id="l-Text" class="l-Text">    
                        <p>Пользователь: {this.state.data[0]}</p>
                        <p>Дизайн:<img className="image" src={require('../style/img/замок2.png')}/></p>
                        <p>Человек: {this.state.data[2]}</p>
                        <p>Сообщение: {this.state.data[3]}</p>
                        <p>Размер: {this.state.data[4]}</p>
                  </div>
                );
            }
            if (this.state.data[1] === "red")
            {
                cardContent = (
                    <div id="l-Text" class="l-Text">                        
                        <p>Пользователь: {this.state.data[0]}</p>
                        <p>Дизайн:<img className="image" src={require('../style/img/замок.png')}/></p>
                        <p>Человек: {this.state.data[2]}</p>
                        <p>Сообщение: {this.state.data[3]}</p>
                        <p>Размер: {this.state.data[4]}</p>
                  </div>
                );
            }
        }
      
        
        return (
            <div className="card" style={{width: '24rem' }}>
                <div className="form-group">
                    {cardContent}
                    <button type="submit" class="btn btn-danger" onClick={this.reloadUserData}>Проверить</button>   
                    <button type="submit" class="btn btn-danger" onClick={this.reloadUserData}>Удалить замочек</button>   
                </div>
            </div>
    );
    
}
}

export default LockList;
