import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './config/firebaseConfig'
import Login from './Login.js'
import Welcome from './Welcome.js'
import * as firebase from 'firebase'

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state=
    {
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener()
  {
    firebase.auth().onAuthStateChanged((user)=>
    {
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }
  render()
  {
    return (
      <div className="App">
        {this.state.user ? (<Welcome/>) : (<Login/>)}
      </div>
    );
  }
}

export default App;
