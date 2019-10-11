import React, {Component} from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/api';
class Login extends Component {

    state = {
       username: "",
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
            username: this.state.username,
            password: this.state.password
        }
        console.log(user);
        API.getUser(user).then(res => {
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
                    <input 
                        type="text" 
                        placeholder="User Name"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name='username'
                    ></input>
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name='password'
                    ></input>
                    <button 
                        type="submit" 
                        value="submit"
                        onClick={this.handleSubmit}
                    >Login</button>
                    <Link
                        to="/account"
                        className={window.location.pathname === "/account" ? "nav-link active" : "nav-link"}
                        >
                        Don't have an account?
                    </Link>
                </div>
        </div>
        )
} 

}

export default Login;