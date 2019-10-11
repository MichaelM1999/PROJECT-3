import React, { Component } from 'react';
import API from '../../utils/api';

class Account extends Component {
    state ={
        user: "",
        password: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleSubmit = event => {
        event.preventDefault();

        let user = {
            username: this.state.user,
            password: this.state.password
        }

        console.log(user);
        API.newUser(user).then(res => {
            if (res.err){
                console.log("CANNOT CREATE USER");
            }

            window.location = '/portfolio';

        });
    }

    render(){
        return (
        <div>
                <div>
                    create an account
                </div>
                <div>
                    <input
                    type="text" 
                    placeholder="User Name"
                    name="user"
                    onChange={this.handleInputChange} 
                    value={this.state.username}
                    ></input>
                    <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={this.handleInputChange} 
                    value={this.state.password}
                    ></input>
                    <button 
                    type="submit" 
                    value="submit" 
                    onClick={this.handleSubmit}
                    > submit </button>
                </div>
        </div>
        )
    }

}

export default Account;