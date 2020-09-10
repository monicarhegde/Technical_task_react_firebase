import React, { Component } from 'react';
import fire from './config/firebaseConfig'
import * as firebase from 'firebase'
import './login.css';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { faEnvelope, faUnlock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Login extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            email : "" ,
            password : "",
            count : 0,
        }
        this.onLogin= this. onLogin.bind(this);
        this.handleChanged=this.handleChanged.bind(this);
    }
    onLogin(e)
    {
        e.preventDefault();
        var temp= new Date();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>
        {
            console.log(u)
            this.setState({count:0})
            var data= temp.toLocaleDateString();
            var timedata= temp.toLocaleTimeString();
            var toSend={
            User : this.state.email,
            date : data,
            time : timedata
        }
        console.log(data)
        console.log(timedata)
         let save=firebase.database().ref('save login').orderByKey().limitToLast(100);
         firebase.database().ref('save login').push({toSend : toSend})
        }).catch((err)=>
            {
                if(this.state.count<3)
                {
                    console.log(err)
                this.state.count= this.state.count+1;
                var temp1= new Date();
                var data= temp1.toLocaleDateString();
                var timedata= temp.toLocaleTimeString();
                 var errorLogin={
                         User : this.state.email,
                         date : data,
                         time : timedata
                     }
        console.log(data)
        console.log(timedata)
         let save=firebase.database().ref('error login').orderByKey().limitToLast(100);
         firebase.database().ref('error login').push({errorLogin : errorLogin})
                alert("Wrong user credentials!")
                }
                else{
                    alert("Your Account is Blocked!")
                }
                
            })
    }
    
    handleChanged(e)
    {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render()
    {
        return(
            <div class="divWhole">
            <form>
            <center><Avatar >
            <LockOutlinedIcon />
                </Avatar>
		        <h3>Login</h3></center>
                <div class="emaildiv">
                <FontAwesomeIcon icon={faEnvelope} /><input
                type="email" name="email" id="email" class="emailClass" placeholder="Enter Email" onChange= {this.handleChanged} value={this.state.email}
                />
                </div>
                <div class="passworddiv">
                <FontAwesomeIcon icon={faUnlock} />
                <input type="password" name="password" class="passClass" id="password" placeholder="Enter password" onChange={this.handleChanged} value={this.state.password}/>
                </div>
                
           <button class="button" onClick={this.onLogin}>Login</button>
            </form>
        </div>
        )
        
    }
}
export default Login;