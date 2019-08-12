import React from 'react';
import { Card, CardText, CardBody, CardLink,
  CardTitle, Row, Col } from 'reactstrap';
  

const DashBody = (props) => {
  return (
    <div>
        <Row>
      <Col sm="4">
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardBody>
          <CardTitle>My Photos</CardTitle>
         
        </CardBody>
        <img  height="250px"  src={require("../../Images/soragrit-wongsa-aV5xrpB0bwQ-unsplash.jpg")} alt=""  />
        <CardBody>
          <CardText>Post your best Photos so that your future clients can see your work.</CardText>
          <CardLink href="#">Add Photos</CardLink>
         
        </CardBody>
      </Card>
      </Col>
      <Col sm="4">
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardBody>
          <CardTitle>Profile</CardTitle>
         
        </CardBody>
        <img height="250px" src={require("../../Images/adrian-Gxam7Id37y0-unsplash.jpg")}alt=""  />
        <CardBody>
          <CardText>Here you can edit  and see your profile</CardText>
          <CardLink href="#">Edit Profile</CardLink>
         
        </CardBody>
      </Card>
      </Col>
      <Col sm="4">
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardBody>
          <CardTitle>Messages</CardTitle>
         
        </CardBody>
        <img  height="250px" src={require("../../Images/mathyas-kurmann-fb7yNPbT0l8-unsplash.jpg")} alt=""  />
        <CardBody>
          <CardText>Here you can view Messeges and Request</CardText>
          <CardLink href="./Messages">Wiew Messages</CardLink>
         
        </CardBody>
      </Card>
      </Col>
      </Row>
    </div>
  );
};

export default DashBody;
    