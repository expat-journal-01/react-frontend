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

import Posts from './components/Posts';
import NewPost from './components/NewPost';

import UsersContainer from './components/UsersContainer'

import { axiosAuth } from './utils/axiosAuth';

const App = () => {
  const [user, setUser] = useState();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories();
    getPosts();
    localStorage.setItem("token", "login");
  }, []);

  const getStories = () => {
    axiosAuth().get(`http://157.245.163.179:8000/api/stories`)
      .then(response => {
        console.log(response.data);
        setStories(response.data);
      })
      .catch(error => {
        console.log(error.response);
      })
  }

  const getPosts = () => {
    axiosAuth().get(`http://157.245.163.179:8000/api/posts`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      })
  }

  return (
      <div className="App">
        <header>
          <div className = "main-nav-links">
            <a className = "btn" href = "https://elated-babbage-c480fd.netlify.app/index.html">Home</a>
            <a className = "btn" href = "https://elated-babbage-c480fd.netlify.app/about.html">About</a>
            <a className = "btn" href = "https://elated-babbage-c480fd.netlify.app/advice.html">Advice</a>
            <a className = "btn" href = "https://elated-babbage-c480fd.netlify.app/team.html">Team</a>
            <Link className = "btn" to = "/">
              Stories
            </Link>
            <Link className = "btn" to = "/posts">
              Posts
            </Link>
          </div>
          <div className = "login-signup-btns">
            <Link className = "btn" to = "/login">LogIn</Link>
            <Link className = "btn" to = "/signup">SignUp</Link>
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
              <EditStory getStories = {getStories} />
            </PrivateRoute>
            

            <PrivateRoute exact path = "/posts">
              <Posts getPosts = {getPosts} />
            </PrivateRoute>
            
            <PrivateRoute exact path = "/newPost">
              <NewPost getPosts = {getPosts} />
            </PrivateRoute>


          <Route exact path = "/signup">
            <Register />
          </Route>

          <Route exact path = "/login">
            <Form getPosts = {getPosts} getStories = {getStories} />
          </Route>
          <Route path='/users'>
            <UsersContainer />
          </Route>
        </Switch>
      </div>
  );
}

export default App;