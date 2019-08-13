import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../Actions/authActions";
import DashBody from "../DashBody";
import DashNavbar from "../DashNav";



class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (

  
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <DashNavbar/>
          <div className="row">
          <div className="col s12 center-align">
           
            <h4>
              <b>Hello,</b> {user.name.split(" ")[0]}
              <p className="DashWelcome">
                You are logged into your Dashboard{" "} 
              </p>
            
     <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              Logout
     </button>
     
          </h4>
      
            <DashBody></DashBody>
              
          </div>
        </div>
   
      </div>
      
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);