import React, { Component, Fragment } from 'react';
import API from '../../utils/api';

class Account extends Component {
    state ={
        user:""
    }
    createAccount = () =>{
        API.newUser()
        return (
            <div>
                <div>
                    Welcome To StockSim!
                </div>
                <div>
                    create an account
                </div>
                <div>
                    <input type="text" placeholder="User Name"></input>
                    <input type="text" placeholder="Password"></input>
                    <input type="submit" value="submit"></input>
                </div>
        </div>

)
}
}

export default Account;