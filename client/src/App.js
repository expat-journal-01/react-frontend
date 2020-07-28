import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register'
import Form from './components/Login';
import Stories from './components/Stories';

import { fetchStoryData } from './actions/index';

const App = props => {
  useEffect(() => {
    props.fetchStoryData();
  }, [])
  
  return (
    <Router>
      <div className="App">
        <header>
          <Link to = "/login">
            LogIn
          </Link>

          <Link to = "/signup">
            SignUp
          </Link>

          <Link to = "/">
            Home
          </Link>
        </header>
        <Switch>
          <PrivateRoute exact path = "/" component = {() => <Stories loading = {props.isLoading} posts = {props.posts} />} />
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
      error: state.error
  }
}
export default connect(mapToStateProps, { fetchStoryData })(App);
