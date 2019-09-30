import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import login from './components/pages/login';
import portfolio from './components/pages/portfolio';
import purchase from './components/pages/purchase';
import search from './components/pages/purchase';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={login} />
        <Route exact path="/portfolio" component={portfolio} />
        <Route exact path="/purchase" component={purchase} />
        <Route exact path="/search" component={search} />
      </div>
    </Router>
  );
}

export default App;
