import React from 'react';
import {
  Alert, Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
  PageSection, Grid, GridItem,
  DataListCheck, DataList, DataListItem, DataListCell, GalleryItem, Card, CardHeader, CardBody
} from '@patternfly/react-core';
import {customerData} from "../../integration/Integration";
import * as moment from 'moment';
import PolicyList from "./PolicyList";

class CustomerDetails extends React.Component {
  state = {
    customer: {},
  };

  componentDidMount() {
    this.setState({customer:customerData});
  }

  handleTextInputChange1 = value1 => {
    this.setState({ value1 });
  };

  handleTextInputChange2 = value2 => {
    this.setState({ value2 });
  };

  handleTextInputChange3 = value3 => {
    this.setState({ value3 });
  };

  render() {
    const { value1, value2, value3, value4 } = this.state;

    return (
      <PageSection>
        <Form isHorizontal>
          <Grid gutter="md">
            <GridItem lg={6}>
              <FormGroup
                label="Full Name"
                isRequired
                fieldId="simple-form-name"

              >
                <TextInput
                  isRequired
                  type="text"
                  id="simple-form-name"
                  name="simple-form-name"
                  aria-describedby="simple-form-name-helper"
                  value={this.state.customer.firstName + ' ' +
                          this.state.customer.middleNames + ' ' +
                          this.state.customer.lastName}
                  onChange={this.handleTextInputChange1}
                />
              </FormGroup>
              <br/>
              <FormGroup label="Email" isRequired fieldId="simple-form-email"
                         helperTextInvalid="Your email is not in a correct format"
              >
                <TextInput
                  isRequired
                  type="email"
                  id="simple-form-email"
                  name="simple-form-email"
                  isValid={true}
                  value={this.state.customer.email}
                  onChange={this.handleTextInputChange2}
                />
              </FormGroup>
              <br/>
              <FormGroup label="Date of Birth" isRequired fieldId="simple-form-dateofbirth"
                         helperTextInvalid="Your date is not in a correct format"
              >
                <TextInput
                  isRequired
                  type="date"
                  id="simple-form-dateofbirth"
                  name="simple-form-dateofbirth"
                  isValid={true}
                  value={moment(this.state.customer.dateOfBirth).format('YYYY-MM-DD')}

                />
              </FormGroup>
              <br/>
              <FormGroup label="Phone number" isRequired fieldId="simple-form-number">
                <TextInput
                  isRequired
                  type="tel"
                  id="simple-form-number"
                  placeholder="(01000) 000000"
                  name="simple-form-number"
                  value={this.state.customer.phoneNumber}
                  onChange={this.handleTextInputChange3}
                />
              </FormGroup>
              <br/>
              <FormGroup label="Address" isRequired fieldId="address">
                    <TextArea
                      isRequired
                      id="address"
                      value={this.state.customer.address}
                    />
              </FormGroup>
              <p>&nbsp;<br/></p>
              <FormGroup label="Postcode" isRequired fieldId="postcode">
                <TextInput
                  isRequired
                  id="postcode"
                  value={this.state.customer.postcode}
                />
              </FormGroup>
              <br/>
              <div style={{textAlign: "right"}}>
                <Button variant="secondary">Update Customer</Button>
              </div>
            </GridItem>
            <GridItem lg={6}>
              <PolicyList/>

            </GridItem>

          </Grid>
        </Form>
      </PageSection>
    );
  }
}

export default CustomerDetails;