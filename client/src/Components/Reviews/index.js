import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Reviews extends React.Component {
  render() {
    return (
      <Form className="review">
        <FormGroup >
          <Label for="exampleEmail">Name</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Leave a review</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
     
       
        
        <Button>Submit</Button>
      </Form>
    );
  }
}