import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

export default class SearchForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup className="form">
          <Label className="label" for="exampleText">Search for Photographers and Photo Services in your area </Label>
          <Input classname="input" type="Text" name="Text" id="exampleText" placeholder="Enter zip code" />
        </FormGroup>
    {/* add on click function to button */}
        <Button>Submit</Button> 
      </Form>
    );
  }
}