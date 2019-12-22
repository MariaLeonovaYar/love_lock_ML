import React, {Component} from 'react';
import '../style/auth.css';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form class="form-horizontal">
                 <div>
                 <input type="radio" value="ann" name = "name" id="name"></input>
                 <input type="radio" value="kate" name = "name" id="name"></input>
                 <p>
                <input type="radio" value="smirnova" name = "surname" id="surname"></input>
                <input type="radio" value="petrova" name = "surname" id="surname"></input>
                 </p>
             <p>
                  <label>Email</label>
                  <input type="text" id = "email"></input> 
             </p>
             <p>
                 <label>Пароль</label>
                  <input type="password" id="password"></input> 
             </p>  
             <div>
                 <button onClick={this.clickHandler}>Submit</button>
             </div>
             </div>
            </form>
        );
    }
}

export default RegisterForm;