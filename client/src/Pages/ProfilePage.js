import React from "react";
import Navbar from "../Components/Navbar";
import Packages from "../Components/Package&Pricing";
import Ppics from "../Components/Ppics"
import Reviews from "../Components/Reviews"


export default class ProfilePage extends React.Component {
  

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div class="tile">
  <div>
    <img height="200px" class="s-rounded" src={require("../Images/CFL-00015.jpg")} alt=""/>
  </div>
  
  <div class="tile-content">
    <p class="tile-title">Hello my name is oscar, I am a freelance photograper that specialize in Wedding photography and film portraits</p>
    <ul>
      <il><button class="btn btn-primary">Request</button></il>
      <il><button class="btn btn-primary">Message</button></il>
      <il><button class="btn btn-primary">Quotes</button></il>

    </ul>
  </div>
  <div class="tile-action">
    <button class="btn btn-primary">Return</button>
  </div>
</div>
<Packages/>
<div><br></br></div>
<Ppics/>
<div><br></br></div>
 <Reviews/>         
    
     </div>
    );
  }
}


