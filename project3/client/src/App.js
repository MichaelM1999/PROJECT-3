import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import login from './components/pages/login';
import Portfolio from './components/pages/portfolio';
import purchase from './components/pages/purchase';
import search from './components/pages/purchase';
import Account from './components/pages/account';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={login} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/purchase" component={purchase} />
        <Route exact path="/search" component={search} />
      </div>
    </Router>
  );
}

export default App;
