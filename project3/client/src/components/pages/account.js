import React, { Component } from 'react';
import API from '../../utils/api';
import '../../css/account.css'
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
        <div className='accForm'>
            <div className='formbx'>

                <div className='words'>
                    Create an Account
                </div>
                <div>
                    <input
                    className='input'
                    type="text" 
                    placeholder="User Name"
                    name="user"
                    onChange={this.handleInputChange} 
                    value={this.state.username}
                    ></input>
                    <input
                    className='input' 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={this.handleInputChange} 
                    value={this.state.password}
                    ></input>
                    <button
                    className='submitbtn'
                    type="submit" 
                    value="submit" 
                    onClick={this.handleSubmit}
                    ><span>Submit </span></button>
                </div>
                    </div>
        </div>
        )
    }

}

export default Account;