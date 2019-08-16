import React, { Component } from 'react';
import {Router, navigate} from '@reach/router';
import firebase from './Firebase'

import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Meetings from './Meetings';
import Register from './Register';
import Login from './Login';


class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null,
      toggle:true
    };
  }

  handleClick=()=>{
    this.setState({
      toggle:!this.state.toggle
    })
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(FBUser => {
      if(FBUser){
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
      }
    });
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(()=>{
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate('/meetings');
      });
    });
  };

  logOutUser = e => {
    e.preventDefault();
    this.setState({
        user:null,
        displayName:null,
        userID: null
    })
    firebase
      .auth()
      .signOut()
      .then(() => {
      navigate('/login')
    });
  };

  addMeeting = meetingName => {
    const ref = firebase
    .database()
    .ref(`meetings/${this.state.user.uid}`)           //references tell the database where you want to write things to
    ref.push({meetingName:meetingName})
  }


  render() {
    return (
      <div>
        <Navigation 
          user={this.state.user}
          logOutUser={this.logOutUser}
        />
        {this.state.user && (
          <Welcome 
            userName={this.state.displayName}
            logOutUser={this.logOutUser} 
          />
        )}
        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Meetings path="/meetings" addMeeting={this.addMeeting}/>
          <Register path="/register"  registerUser={this.registerUser}/>
        </Router>
      </div>
      );
    }
  }

export default App;
