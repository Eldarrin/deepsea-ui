import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  Checkbox,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownPosition,
  TextArea,
  Button,
  Radio,
  PageSection, Grid, GridItem,
  Title, EmptyState, EmptyStateIcon, EmptyStateBody, Toolbar, ToolbarGroup, ActionGroup
} from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';

class ProductDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onToggle = isOpen => {
    this.setState({
      isOpen
    }) ;
  };

  onSelect = event => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="premium">Premium</DropdownItem>,
      <DropdownItem key="premium">Standard</DropdownItem>,
      <DropdownItem key="premium">Basic</DropdownItem>,
    ];

    return (
      <Dropdown onSelect={this.onSelect}
                toggle={<DropdownToggle onToggle={this.onToggle}>Please select your product...</DropdownToggle>}
                isOpen={isOpen}
                dropdownItems={dropdownItems}
                position={DropdownPosition.right}
                />
    )
  }

}

class SimpleEmptyState extends React.Component {
  render() {
    return (
      <EmptyState>
        <EmptyStateIcon icon={CubesIcon} />
        <Title size="lg">Digital Signature</Title>
        <EmptyStateBody>
          This represents the digital signature frame; if required.
        </EmptyStateBody>

      </EmptyState>
    );
  }
}

class EnrolmentForm extends React.Component {
    state = {
        value1: '',
        value2: '',
        value3: '',
      value4: '',
    };

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
                <GridItem lg={4}>
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
                        value={value1}
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
                        value={value2}
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
                      value={value4}

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
                        value={value3}
                        onChange={this.handleTextInputChange3}
                    />
                </FormGroup>
                  <br/>
                  <FormGroup label="Address" isRequired fieldId="address">
                    <TextArea
                      isRequired
                      id="address"
                      value={' '}
                      />
                  </FormGroup>
                  <p>&nbsp;<br/></p>
                  <FormGroup label="Postcode" isRequired fieldId="postcode">
                    <TextInput
                      isRequired
                      id="postcode"
                      value={' '}
                    />
                  </FormGroup>

                </GridItem>
                <GridItem lg={4}>
                  <FormGroup label="Product" isRequired fieldId="product">
                    <ProductDropdown/>
                  </FormGroup>
                  <br/>
                  <FormGroup label="Start Date" isRequired fieldId="simple-form-startdate"
                             helperTextInvalid="Your date is not in a correct format"
                  >
                    <TextInput
                      isRequired
                      type="date"
                      id="simple-form-startdate"
                      name="simple-form-startdate"
                      isValid={true}
                      value={value4}

                    />
                  </FormGroup>
                  <br/>
                  <FormGroup label="Account No." isRequired fieldId="accnum">
                    <TextInput
                      isRequired
                      id="accnum"
                      value={' '}
                    />
                  </FormGroup>
                  <br/>
                  <FormGroup label="Sort Code" isRequired fieldId="sortcode">
                    <TextInput
                      isRequired
                      id="sortcode"
                      value={' '}
                    />
                  </FormGroup>
                  <br/>
                  <FormGroup fieldId="acceptTerms">
                    <Checkbox label="Do you accept the terms and conditions?" id="acceptTerms" name="acceptTerms" aria-label="Accept terms" />
                  </FormGroup>
                  <br/>

                  <FormGroup isInline label="How can we contact you?" fieldId="inline-radio1">
                    <Radio id="inlineradio1" name="inlineradios" label="Email" aria-label="Email" />
                    <Radio id="inlineradio2" name="inlineradios" label="Phone" aria-label="Phone" />
                    <Radio
                      id="inlineradio3"
                      name="inlineradios"
                      label="Please don't contact me"
                      aria-label="Please don't contact me"
                    />
                  </FormGroup>
                  <br/>
                  <FormGroup fieldId="checkbox1">
                    <Checkbox label="I'd like updates via email" id="checkbox1" name="checkbox1" aria-label="Update via email" />
                  </FormGroup>
                </GridItem>
                <GridItem lg={4}>
                  <SimpleEmptyState/>

                  <br/>
                  <ActionGroup>
                    <Toolbar>
                      <ToolbarGroup>
                        <Button variant="primary">Submit policy</Button>
                      </ToolbarGroup>
                      <ToolbarGroup>
                        <Button onClick={this.props.cancelHandler} variant="secondary">Cancel</Button>
                      </ToolbarGroup>
                    </Toolbar>
                  </ActionGroup>
                </GridItem>
              </Grid>
            </Form>
          </PageSection>
        );
    }
}

export default EnrolmentForm;