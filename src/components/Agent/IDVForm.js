import React from 'react';
import {
  Form,
  FormGroup,
  Checkbox,
  TextContent,
  Text,
  Button,
  TextVariants
} from '@patternfly/react-core';
import { customerData } from '../../integration/Integration';
import * as moment from 'moment';

class IDVForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer : [],
    }
  }

  componentDidMount() {
    this.setState({customer:customerData});
  }

  render() {
    return (
      <Form>
        <TextContent>
          <Text component={TextVariants.h3}>ID & V Check</Text>
        </TextContent>
        <FormGroup fieldId="name-correct">
          <Checkbox label={"Did they say their name is " + this.state.customer.firstName + " " +
                          this.state.customer.middleNames + " " +
                          this.state.customer.lastName + "?"} id="checkbox1" name="checkbox1" aria-label="Name correct" />
        </FormGroup>
        <FormGroup fieldId="dob-correct">
          <Checkbox label={"Did they say their date of birth is " +
                moment(this.state.customer.dateOfBirth).format('Do MMMM YYYY') + "?"} id="checkbox2" name="checkbox2" aria-label="DOB correct" />
        </FormGroup>
        <FormGroup fieldId="1st-address-correct">
          <Checkbox label={"Did they say the first line of their address is " + this.state.customer.address + "?"} id="checkbox3" name="checkbox3" aria-label="addr1 correct" />
        </FormGroup>
        <FormGroup fieldId="postcode-correct">
          <Checkbox label={"Did they say their postcode is " + this.state.customer.postcode + "?"} id="checkbox4" name="checkbox4" aria-label="postcode correct" />
        </FormGroup>
        <div style={{textAlign: "right"}}>
          <Button onClick={() => this.props.handleClick('customer')} variant="primary">Submit ID & V</Button>{' '}
          <Button onClick={this.props.cancelHandler} variant="secondary">Cancel</Button>
        </div>
      </Form>
    )
  }

}

export default IDVForm;