import React, { useState, useEffect } from 'react';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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
  const { push } = useHistory();
  const [user, setUser] = useState();
  const [stories, setStories] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getStories();
    getPosts();
    checkLog();
  }, []);

  const getStories = () => {
    axiosAuth().get(`https://www.expat-journal.online/api/stories`)
      .then(response => {
        console.log(response.data);
        setStories(response.data);
      })
      .catch(error => {
        console.log(error.response);
      })
  }

  const getPosts = () => {
    axiosAuth().get(`https://www.expat-journal.online/api/posts`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      })
  }

  const checkLog = () => {
    if(localStorage.getItem("token") === "loggedout"){
      setLoggedIn(false);
    }
    else{
      setLoggedIn(true);
    }
  }

  const switchLocation = loca => {
    push(`/${loca}`)
  }

  const logout = () => {
    localStorage.setItem("token", "loggedout");
    checkLog();
    push('/login');
  }

  return (
      <div className="App">
        <header>
          {
            loggedIn === false &&
            <div className = "main-nav-links">
              <a className = "btn" href = "https://marketing-omega.vercel.app/index.html">Home</a>
              <a className = "btn" href = "https://marketing-omega.vercel.app/about.html">About</a>
              <a className = "btn" href = "https://marketing-omega.vercel.app/advice.html">Advice</a>
              <a className = "btn" href = "https://marketing-omega.vercel.app/team.html">Team</a>
            </div>
          }
            {
              loggedIn === true &&
                <div className = "main-nav-links">
                  <a className = "btn" href = "https://marketing-omega.vercel.app/index.html">Home</a>
                  <a className = "btn" href = "https://marketing-omega.vercel.app/about.html">About</a>
                  <a className = "btn" href = "https://marketing-omega.vercel.app/advice.html">Advice</a>
                  <a className = "btn" href = "https://marketing-omega.vercel.app/team.html">Team</a>
                  <Link className = "btn" to = "/">
                    Stories
                  </Link>
                  <Link className = "btn" to = "/posts">
                    Posts
                  </Link>
                </div>
            }
            {
              loggedIn === false && <div className = "login-signup-btns">
                <Link className = "btn" to = "/login">LogIn</Link>
                <Link className = "btn" to = "/signup">SignUp</Link>
              </div>
            }
            {
              loggedIn === true && <div className = "login-signup-btns">
                <p className = "btn" onClick = {logout}>Logout</p>
              </div>
            }
        </header>
        <Switch>
            <Route exact path = "/signup">
              <Register switchLocation = {switchLocation} />
            </Route>
            <Route path='/users'>
              <UsersContainer />
            </Route>

            <Route exact path = "/login">
              <Form getPosts = {getPosts} getStories = {getStories} setUser = {setUser} checkLog = {checkLog} switchLocation = {switchLocation} />
            </Route>

            <PrivateRoute exact path = "/story/:id" component = {() => <Story getStories = {getStories} />} />

            <PrivateRoute exact path = "/newStory" component = {() => <NewStory getStories = {getStories} />} />

            <PrivateRoute exact path = "/editStory/:id" component = {() => <EditStory getStories = {getStories} />} />
            
            <PrivateRoute exact path = "/posts" component = {() => <Posts getPosts = {getPosts} />} />
            
            <PrivateRoute exact path = "/newPost" component = {() => <NewPost getPosts = {getPosts} />} />

            <PrivateRoute exact path = "/" component = {() => <Stories stories = {stories} />} />
        </Switch>
      </div>
  );
}

export default App;