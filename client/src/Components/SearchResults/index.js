import React from "react";
import { Row, Col  } from 'reactstrap';
import { Link } from "react-router-dom";
function SearchResults(props) {
    
        return(
            
                 <div id="resultsContainer">
                    <h4>Photographer Results 1 of 1</h4>
                    <Row>
                        <Col sm="12">
                            <div>
                            <img  height="100px"  src={require("../../Images/CFL-00015.jpg")} alt=""  /> 

                            </div>
                            <p>Hello my name is oscar, I am a freelance photograper that specialize in Wedding photography and film portraits</p>
                            <ul className="list">
                                <il>
                                    Weddings
                                </il>
                                <il>
                                    Sports
                                </il>
                                <il>
                                    Corporate Events
                                </il>
                                
                            </ul>
                            <div>
                            <Link to="./profilepage">View Profile</Link>
                            </div>
                        </Col>
                    </Row>
                    

      </div>
        )
};

    


export default SearchResults;