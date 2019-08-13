import React from "react";
import { Card, CardBody,
     Row, Col } from 'reactstrap';



    const Ppics = (props) => {
        return (
            
          <div>
              <Row>
            <Col sm="3">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardBody>
               
              </CardBody>
              <img  height="200px"  src={require("../../Images/DSC_7637.jpg")} alt=""  />
              <CardBody>
               
               
              </CardBody>
            </Card>
            </Col>
            <Col sm="3">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardBody>
                
               
              </CardBody>
              <img height="200px" src={require("../../Images/DSC_7668.jpg")}alt=""  />
              <CardBody>
               
               
              </CardBody>
            </Card>
            </Col>
           
            <Col sm="3">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardBody> 
              </CardBody>
              <img  height="200px" src={require("../../Images/DSC_8050-2.jpg")} alt=""  />
              <CardBody>
               
                </CardBody>
            </Card>
            </Col>

            <Col sm="3">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardBody> 
              </CardBody>
              <img  height="200px" src={require("../../Images/DSC_8522.JPG")} alt=""  />
              <CardBody>
               
                </CardBody>
            </Card>
            </Col>
            </Row>
            <div> <br></br>
            </div>

            <Row>
            <Col sm="3">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardBody>
               
              </CardBody>
              <img  height="200px"  src={require("../../Images/DSC_8531.JPG")} alt=""  />
              <CardBody>
               
               
              </CardBody>
            </Card>
            </Col>
            <Col sm="3">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardBody>
                
               
              </CardBody>
              <img height="200px" src={require("../../Images/DSC_8641.JPG")}alt=""  />
              <CardBody>
               
               
              </CardBody>
            </Card>
            </Col>
           
            <Col sm="3">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardBody> 
              </CardBody>
              <img  height="200px" src={require("../../Images/ittatti.jpg")} alt=""  />
              <CardBody>
               
                </CardBody>
            </Card>
            </Col>

            <Col sm="3">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardBody> 
              </CardBody>
              <img  height="200px" src={require("../../Images/DSC_0005.jpg")} alt=""  />
              <CardBody>
               
                </CardBody>
            </Card>
            </Col>
            </Row>
            
          </div>
          
        );
      };
      
      export default Ppics;