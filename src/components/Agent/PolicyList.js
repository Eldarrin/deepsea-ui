import {
  Alert,
  Button, Card, CardBody, CardHeader,
  DataList,
  DataListCell,
  DataListCheck,
  DataListItem,
  GalleryItem,
  GridItem
} from "@patternfly/react-core";
import React from "react";
import {searchData} from "../../integration/Integration";

const policyList = [
  { "policyId" : 1, "policyType" : "Home Insurance", "sumInsured" : 450000 },
  { "policyId" : 2, "policyType" : "Yacht Insurance", "sumInsured" : 90000 }

];

class PolicyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policies : [],
      warning: null,
    }
  }

  doNothing() {

  }

  getAlert(alertTitle) {
    return (
      <Alert variant="warning" title={alertTitle}/>
    )
  }

  raiseAlert() {
    this.setState({warning: this.getAlert("You haven't selected a policy")})
  }

  clearAlert() {
    this.setState({warning: null})
  }

  componentDidMount() {
    let policies = policyList.map((pol) => {
      return(
        <DataListItem key={pol.policyId} aria-labelledby="simple-item1">
          <DataListCheck onClick={() => this.clearAlert()} aria-labelledby="check-action-item1" name="check-action-check1"/>
          <DataListCell>
            <span id="simple-item1">{pol.policyType}</span>
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
        <div style={{textAlign: "right", marginBottom: "15px"}}>
          <Button variant="secondary">New Policy</Button>{' '}
          <Button onClick={() => this.raiseAlert()} variant="secondary">New Claim</Button>{' '}
          <Button variant="secondary">New Endorsement</Button>{' '}

        </div>
        <DataList aria-label="Simple data list example">
          {this.state.policies}
        </DataList>
        {this.state.warning}
      </div>
    )
  }
}

export default PolicyList;