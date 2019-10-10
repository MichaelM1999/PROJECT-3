import React from 'react';
import '../css/header.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navtabs from '../components/NavTabs';
import login from './pages/login';
import Portfolio from './pages/portfolio';
import purchase from './pages/purchase';
import search from './pages/search';
import Account from './pages/account';
import Home from './pages/home';

const Header = () => {
    return(
        <div className="container">
            <img src="project3/client/public/money.jpeg" className="logo"></img>
            <h1 className="title">StockSim</h1>
            <div className="dropdown">
                <button className="dropbtn">
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </button>
                    <div className="dropdown-content">
                        <Router>
                            <Navtabs />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/portfolio" component={Portfolio} />
                            <Route exact path="/purchase" component={purchase} />
                            <Route exact path="/search" component={search} />
                        </Router>
                    </div>
</div>

        </div>
    )
}

export default Header;