import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register'
import Form from './components/Login';
import Stories from './components/Stories';
import NewStory from './components/NewStory';
import EditStory from './components/EditStory';

import { fetchStoryData, uploadNewStory, editStory, deleteStory } from './actions/index';

const App = props => {
  useEffect(() => {
    props.fetchStoryData();
  }, props.posts)
  
  return (
    <Router>
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
          </div>
        </header>
        <Switch>
          <PrivateRoute exact path = "/" component = {() => <Stories loading = {props.isLoading} posts = {props.posts} deleteStory = {props.deleteStory} />} />
          <PrivateRoute exact path = "/newStory" component = {() => <NewStory loading = {props.submitLoading} uploadNewStory = {props.uploadNewStory} />} />
          <PrivateRoute exact path = "/editStory/:id" component = {() => <EditStory editStory = {props.editStory} loading = {props.submitLoading} />} />
          <Route exact path = "/signup" component = {Register} />
          <Route exact path = "/login" component = {() => <Form />} />
        </Switch>
      </div>
    </Router>
  );
}
const mapToStateProps = state => {
  return {
      username: state.username,
      posts: state.posts,
      isLoading: state.isLoading,
      submitLoading: state.submitLoading,
      error: state.error
  }
}
export default connect(mapToStateProps, { fetchStoryData, uploadNewStory, editStory, deleteStory })(App);
