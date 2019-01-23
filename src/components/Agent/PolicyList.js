import {
  Alert,
  Button, Card, CardBody, CardHeader,
  DataList,
  DataListCell,
  DataListCheck,
  DataListItem,
  GalleryItem,
  GridItem,
  Radio
} from "@patternfly/react-core";
import React from "react";
import {policyList} from "../../integration/Integration";

class PolicyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policies : [],
      warning: null,
      policySelected: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  doNothing() {

  }

  getAlert(alertTitle) {
    return (
      <Alert variant="warning" title={alertTitle}/>
    )
  }

  raiseAlert() {
    if (this.state.policySelected === '') {
      this.setState({warning: this.getAlert("You haven't selected a policy")})
    }

  }

  clearAlert() {
    this.setState({warning: null})
  }

  handleChange = (_, event) => {
    const { value } = event.currentTarget;
    this.setState({ policySelected:value });
  }

  componentDidMount() {
    let policies = policyList.map((pol) => {
      return(
        <DataListItem key={pol.policyId} aria-labelledby="simple-item1">
          <DataListCell>
            <Radio onClick={() => this.clearAlert()}
                   value={"policy" + pol.policyId}
                   onChange={this.handleChange}
                   label={pol.policyType}
                   id={"rad" + pol.policyId}
                   name="policy-select-radio" />
          </DataListCell>
          <DataListCell>
            Sum Insured: £{pol.sumInsured}
          </DataListCell>
        </DataListItem>
      )
    });
    this.setState({policies:policies});
  }

  render() {
    return (
      <div>
        {this.state.warning}
        <div style={{textAlign: "right", marginBottom: "15px"}}>
          <Button variant="secondary">New Policy</Button>{' '}
          <Button onClick={() => this.raiseAlert()} variant="secondary">New Claim</Button>{' '}
          <Button onClick={() => this.raiseAlert()} variant="secondary">New Endorsement</Button>{' '}

        </div>
        <DataList aria-label="Simple data list example">
          {this.state.policies}
        </DataList>
        {this.state.policySelected}
      </div>
    )
  }
}

export default PolicyList;

/*

          <DataListCheck  aria-labelledby="check-action-item1" name="check-action-check1"
            onChange={ this.handleChange }/>

            <span id="simple-item1">{pol.policyType}</span>

 */