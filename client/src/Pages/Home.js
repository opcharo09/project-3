import React, {Component} from "react";

 //import { Link } from "react-router-dom";
 import Navbar from "../Components/Navbar/index";
import Header from "../Components/Header/index";
import ProfileIntro from "../Components/ProfileIntro";
import SearchResults from "../Components/SearchResults"




class Home extends Component {
    render(){
      return (
      
        <div >
          <Navbar />
             
        <Header></Header>
     
        <ProfileIntro/>
        <SearchResults/>
        </div>
        )
        }
        }

        export default Home;