import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from './account';
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
    
    

    render(){ 
        return (
            <div>
                <div>
                    Welcome To StockSim!
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="User Name"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name='username'
                    ></input>
                    <input 
                        type="text" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name='password'
                    ></input>
                    <button type="submit" value="submit"></button>
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