import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import login from './components/pages/login';
import Portfolio from './components/pages/portfolio';
import purchase from './components/pages/purchase';
import search from './components/pages/search';
import Account from './components/pages/account';

function App() {
  return (
  <Router>
    <div>
      <div>
        <Header />
        <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/purchase" component={purchase} />
            <Route exact path="/search" component={search} />
            <Route exact path="/account" component={Account} />
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </Router>
  );
}

export default App;
