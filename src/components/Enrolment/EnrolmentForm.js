import React from 'react';
import {
    Form,
    FormGroup,
    TextInput,
    Checkbox,
    ActionGroup,
    Toolbar,
    ToolbarGroup,
    Button,
    Radio,
  TextContent
} from '@patternfly/react-core';

class EnrolmentForm extends React.Component {
    state = {
        value1: '',
        value2: '',
        value3: ''
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
        const { value1, value2, value3 } = this.state;

        return (
            <Form isHorizontal>
              <TextContent>
                Insurance
                Product
                Start Date
                Agree terms
                Digital Signature

                Risk --- ???

                Customer
                Date of birth
                Address
                City
                Postcode

                Billing
                AccNo/Sortcode/IBAN

              </TextContent>
                <FormGroup
                    label="Required Name"
                    isRequired
                    fieldId="simple-form-name"
                    helperText="Please provide your full name"
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
                <FormGroup label="Required Email" isRequired fieldId="simple-form-email"
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
                <FormGroup isInline label="How can we contact you?" isRequired fieldId="inline-radio1">
                    <Radio id="inlineradio1" name="inlineradios" label="Email" aria-label="Email" />
                    <Radio id="inlineradio2" name="inlineradios" label="Phone" aria-label="Phone" />
                    <Radio
                        id="inlineradio3"
                        name="inlineradios"
                        label="Please don't contact me"
                        aria-label="Please don't contact me"
                    />
                </FormGroup>
                <FormGroup fieldId="checkbox1">
                    <Checkbox label="I'd like updates via email" id="checkbox1" name="checkbox1" aria-label="Update via email" />
                </FormGroup>
            </Form>
        );
    }
}

export default EnrolmentForm;