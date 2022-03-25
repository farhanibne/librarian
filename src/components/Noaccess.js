import React from 'react'
import { firebase } from '../lib/firebase'
import access from './access.svg'

function Noaccess() {
    const signout = () =>{
        firebase.auth().signOut();
    }
  return (
    <div style={{height:'100vh',width:'100vw'}}>

    <center>
        <img src={access} style={{height:'50vh',width:'50vw',marginTop:'10px'}}/><br/>

        <h1 style={{fontSize:'19px'}} className="font-semibold">Access Denied. </h1> 
        <h4>contact me at farhanibne760@gmail.com</h4><br/>
        <button style={{background:'#000000',padding:'13px',fontSize:'19px',color:'azure',borderRadius:'10px'}} onClick={signout}>sign out</button>    
    </center>

    </div>
  )
}

export default Noaccess