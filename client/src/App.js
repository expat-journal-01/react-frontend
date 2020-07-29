import React, { useState, useEffect } from 'react';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import './App.css';


import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register'
import Form from './components/Login';
import Stories from './components/Stories';
import Story from './components/Story';
import NewStory from './components/NewStory';
import EditStory from './components/EditStory';

import { axiosAuth } from './utils/axiosAuth';

const App = () => {
  const [user, setUser] = useState();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = () => {
    axiosAuth().get(`http://157.245.163.179:8000/api/stories`)
      .then(response => {
        console.log(response);
        setStories(response.data);
      })
      .catch(error => {
        console.log(error.response);
      })
  }

  return (
      <div className="App">
        <header>
          <div className = "main-nav-links">
            <a className = "btn">Home</a>
            <a className = "btn">About</a>
            <a className = "btn">Advice</a>
            <a className = "btn">Team</a>
            <Link className = "btn" to = "/">
              Stories
            </Link>
          </div>
          <div className = "login-signup-btns">
            <Link className = "btn" to = "/login">LogIn</Link>
            <Link className = "btn" to = "/signup">SignUp</Link>
            <Link to='/getPosts'>Post Test</Link>
          </div>
        </header>
        <Switch>
          <PrivateRoute exact path = "/">
            <Stories stories = {stories} />
          </PrivateRoute>
          <PrivateRoute exact path = "/story/:id">
            <Story getStories = {getStories} />
          </PrivateRoute>
          <PrivateRoute exact path = "/newStory">
            <NewStory getStories = {getStories} />
          </PrivateRoute>
          <PrivateRoute exact path = "/editStory/:id">
            <EditStory />
          </PrivateRoute>
          <Route exact path = "/signup">
            <Register />
          </Route>
          <Route exact path = "/login" component = {() => <Form />} />
        </Switch>
      </div>
  );
}

export default App;