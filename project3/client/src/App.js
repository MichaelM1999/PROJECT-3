import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer';
import login from './components/pages/login';
import Portfolio from './components/pages/portfolio';
<<<<<<< HEAD
import contact from './components/pages/Contact';
=======
import contact from './components/pages/contact';
>>>>>>> 70b7f14e750efe303ea955275dc6254037bc11fa
import search from './components/pages/search';
import Account from './components/pages/account';
import './css/app.css';

function App() {
  return (
  <Router>
    <div className="bg">
      <div>
<<<<<<< HEAD
        
        <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={contact} />
=======
        <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={contact} />
>>>>>>> 70b7f14e750efe303ea955275dc6254037bc11fa
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
