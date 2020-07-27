import React from 'react';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';
import './App.css';
import Register from './components/Register'




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
      <Route exact path = "/" />

      <Route exact path = "/login" />

      <Route exact path = "/signup">
        {/* <Register />  */}
      </Route>
    </div>
  );
}

export default App;
