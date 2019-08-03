
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SearchForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Search for Photographers and photo services in your area </Label>
          <Input type="Text" name="Text" id="exampleText" placeholder="Enter zip code" />
        </FormGroup>
    {/* add on click function to button */}
        <Button>Submit</Button> 
      </Form>
    );
  }
}

