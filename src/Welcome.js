import React, { Component } from 'react';
import * as firebase from 'firebase';
import { faHandPointLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import niladv from './niladv.png';
import './welcome.css'
class Welcome extends Component
{
    constructor(props)
    {
        super(props)
        this.onLogout=this.onLogout.bind(this);    }
    onLogout()
    {
        firebase.auth().signOut();    }
    render()
    {
        return(
            <div>
                <img class="niladv" src= {niladv} alt="pic" />
                <h1 class="title">Niladvantage Technologies Pvt Ltd</h1>
                <h2 class="welcome">WELCOME!!</h2>
                <h4 class="des">This is a technical task assigned to me to develop a web page using React and Firebase.
                Authentication is developed using Firebase Authentication and Realtime Database is used in order to store the log. On correct credentials the user is logged in otherwise an alert is shown.</h4>
                <button class="logout" nClick={this.onLogout}><FontAwesomeIcon icon={faHandPointLeft} /> Logout</button>
            </div>
        )

    }
}
export default Welcome;