import React from 'react';
import {
  Form,
  FormGroup,
  TextContent,
  Text,
  Button,
  TextVariants, TextInput
} from '@patternfly/react-core';

class SearchForm extends React.Component {
  render() {
    return (
      <Form>
        <TextContent>
          <Text component={TextVariants.h3}>Search Form</Text>
        </TextContent>
        <FormGroup label="PolicyID-RiskID-ClaimID (at least PolicyID)" fieldId="form-policyid">
          <TextInput type="text" id="form-policyid" name="form-policyid" aria-describedby="form-policyid-helper"
                     value={''}
          />
        </FormGroup>
        <FormGroup label="Name (full or partial)" fieldId="form-name">
          <TextInput type="text" id="form-name" name="form-name" aria-describedby="form-name-helper"
                     value={''}
          />
        </FormGroup>
        <FormGroup label="Telephone Number (full or partial)" fieldId="form-postcode">
          <TextInput type="text" id="form-telno" name="form-telno" aria-describedby="form-telno-helper"
                     value={''}
          />
        </FormGroup>
        <FormGroup label="Postcode (full or partial)" fieldId="form-postcode">
          <TextInput type="text" id="form-postcode" name="form-postcode" aria-describedby="form-postcode-helper"
                     value={''}
          />
        </FormGroup>


        <div style={{textAlign: "right"}}>
          <Button variant="primary" onClick={() => this.props.handleClick('searchR')}>Search</Button>{' '}
          <Button onClick={this.props.cancelHandler} variant="secondary">Cancel</Button>
        </div>
      </Form>
    )
  }


}

export default SearchForm;