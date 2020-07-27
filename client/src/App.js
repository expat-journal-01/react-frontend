import React from 'react';
import { BrowserRouter as Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink exact to = "/login">
          LogIn
        </NavLink>

        <NavLink exact to = "/signup">
          SignUp
        </NavLink>

        <NavLink exact to = "/">
          Home
        </NavLink>
      </header>
      <Switch>
        <PrivateRoute exact path = "/" />
        <Route path = "/login" />
        <Route path = "/signup" />
      </Switch>
    </div>
  );
}

export default App;
