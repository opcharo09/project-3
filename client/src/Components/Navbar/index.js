import React from 'react';
 import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "../Register/index";
 import Login from "../Login/index";
import { Link } from "react-router-dom";
//import SignInModal from "../SignInModal/index";
//import Button from "../Button/index";


export default class navbar extends React.Component {
  
 
  
  
  render() {
    return (
     <Router>
      <div>
        <header class="navbar">
       
  <section  class="navbar-section">
    <a href="/" class="btn btn-link">Photo Hub</a>
    
  </section>
  <section class="navbar-center">
    
  </section>
  <section class="navbar-section">
    <Link to="/register" class="btn btn-link">Register</Link>
    <Link to="/login" class="btn btn-link">Login</Link>
  </section>
</header>

    <Route exact path="/register"component={Register}/>
    <Route exact path="/login"component={Login}/>
           
          
          
          
        </div>
      </Router>
  
    );
  };
}