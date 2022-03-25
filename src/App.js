import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import Noaccess from "./components/Noaccess";
import { firebase } from "./lib/firebase";



function App() {

  const [isuser, setisuser] = useState(true);
  firebase.auth().onAuthStateChanged((user) =>{
    if(user){
      return setisuser(true);
    }
    setisuser(false);
  })

  const user = firebase.auth().currentUser;

  if(isuser === true){

  if(user){
  if(user.email === "farhanibne860@gmail.com" || user.email === "farhanibne760@gmail.com"){
    return (
      <div style={{overflow:'hidden'}}>
  
      <Router>
      <Switch>
      <Route >
         <Main/>
      </Route>
      </Switch>
      </Router>
      
  
      </div>
    );
  }
  else{
    return (
      <div style={{overflow:'hidden'}}>
  
      <Router>
      <Switch>
      <Route >
         <Noaccess/>
      </Route>
      </Switch>
      </Router>
      
  
      </div>
    );
  }
}
else{
  return <Noaccess/>
}
  }

  else{

  
  return (
    <div style={{overflow:'hidden'}}>

    <Router>
    <Switch>
    <Route >
       <Login/>
    </Route>
    </Switch>
    </Router>
    

    </div>
  );
  }
}

export default App;
