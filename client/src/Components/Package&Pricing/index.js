import React from 'react';
import {  Col, Row } from 'reactstrap';

  function Packages() { 
    return (
        
      <div className="packs">
         <Row> 
        <Col lg="4">
            <h3>Services</h3>
            <ol>
                <li>Wedding Photography</li>
                <li>Sports Photography</li>
                <li> Graduation Photography</li>
            </ol>
        </Col>
        <Col lg="4">
            <h3>Packages</h3>
            <ol>
                <li>Event + Prints = $150 </li>
                <li>Event + Prints + Photoshop = $250</li>
                <li> Event = $80 </li>
            </ol>
        </Col>
        <Col lg="4">
            <h3>Additional Services</h3>
            <ol>
                <li>Photoshop</li>
                <li>Prints</li>
                <li> Photography Lessons</li>
            </ol>
        </Col>
        </Row>

        </div>
    )
}
        export default Packages;

