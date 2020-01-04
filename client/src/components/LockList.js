import React, {Component} from 'react';
import LockContent from "../components/LockContent";
import {getUserData} from "../api/UserData";

class LockList extends Component {

    reloadUserData = () => {
        getUserData("11").then((data) => {
            this.setState({'data': data});
        });
    };

    render() {
        
        return (
            <div className="container">               
                <div className="row" id="lock-list">
                    { 
                     //<p>{this.reloadUserData()}</p>
                     <LockContent info={this.reloadUserData()}/>
                    }
                </div>
            </div>
        );
    }
}

export default LockList;
