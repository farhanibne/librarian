import React from 'react'
import login from './login.svg'
import { firebase } from '../lib/firebase'

function Login() {

    const signin = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((re) =>{
            console.log(re);
        }
        )
        .catch((err) =>{
            console.log(err);
        }
        )

    }

  return (
    <div style={{height:'100vh',width:'100vw',}}>
        <center>
        <img src={login} style={{height:'50vh',width:'50vw',marginTop:'10px'}}/>    
        <h1 style={{marginTop:'50px',fontSize:'30px'}}> Greetings From  LIBRARIAN </h1> <br/><br/>
    
        <button style={{background:'#000000',padding:'17px',borderRadius:'12px',color:'azure',fontSize:'19px',}} onClick={signin}>Sign In With Google</button>

        </center>
       
        
    </div>
  )
}

export default Login