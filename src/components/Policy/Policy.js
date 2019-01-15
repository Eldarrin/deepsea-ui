import React from "react";
import {
  Button,
  Grid,
  GridItem,
  PageSection,
  PageSectionVariants,
  Text,
  TextContent, TextVariants
} from "@patternfly/react-core";
import EnrolmentModal from "./EnrolmentModal";
import EnrolmentForm from './EnrolmentForm';
import SimpleChart from "../SimpleChart";
import PageBottomSectionDashboard from './PolicyDash';
import Claim from "../Claim/Claim";

let bottomFrame = 'dash';

const mainComponents = {
  enrolment: EnrolmentForm,
  dashboard: PageBottomSectionDashboard,
};

function getBottomElement(client) {
  const EnrolElement = mainComponents.enrolment;
  const DashElement = mainComponents.dashboard;
  if (bottomFrame === 'dash') {
    return <DashElement client={client}/>
  } else {
    return <EnrolElement client={client}/>
  }
};

class PageTopSectionPolicy extends React.Component {
  render() {
    return (
      <PageSection variant={PageSectionVariants.light}>
        <Grid>
          <GridItem lg={6}>
            <TextContent>
              <Text component="h1">Policy <b>{this.props.client}</b></Text>
            </TextContent>
          </GridItem>
          <GridItem lg={6}>
            <TextContent>
              <div style={{textAlign: "right"}}>
                <Button>Search</Button>{' '}
                <Button onClick={() => {this.props.handleClick('enrolment')}}>New Policy</Button>
              </div>
            </TextContent>
          </GridItem>
        </Grid>
      </PageSection>
    )
  }
}

class Policy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomSection: null,
    };
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    this.setState({bottomSection: getBottomElement(this.props.client)});
  }

  handleClick(val) {
    //alert('boom');
    bottomFrame = val;
    this.setState({bottomSection: getBottomElement(this.props.client)});
  };

  render() {
    return (
      <React.Fragment>
        <PageTopSectionPolicy client={this.props.client} handleClick={this.handleClick}/>
        {this.state.bottomSection}
      </React.Fragment>
    );
  }
}

export default Policy;