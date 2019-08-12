import React, {Component} from "react";
 import { BrowserRouter as Router, Switch } from "react-router-dom";
 //import { Link } from "react-router-dom";
 import { Provider } from "react-redux";
 import store from "./store";
import "./App.css";
 import Navbar from "./Components/Navbar/index";
// import Header from "./Components/Header/index";
// import Register from "./Components/Register/index"
// import Login from "./Components/Login/index";
import jwt_decode from "jwt-decode";
import setAuthToken from "./Utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./Actions/authActions";
import PrivateRoute from "./Components/Private-route/index";
import Dashboard from "./Components/Dashboard/index"
// import ProfileIntro from "./Components/ProfileIntro";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./Login";
  }
}


class App extends Component {
render(){
  return (
     <Provider store={store}>
   <Router>
    <div >
      <Navbar />
         
    {/* <Header></Header>
 
    <ProfileIntro/> */}
   
    
    <Switch>
    <PrivateRoute  path="/dashboard" component={Dashboard} />
    </Switch>
    </div>
   </Router>
    </Provider>
    );
  }
}

export default App;
