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

function getBottomElement() {
  const EnrolElement = mainComponents.enrolment;
  const DashElement = mainComponents.dashboard;
  if (bottomFrame === 'dash') {
    return <DashElement/>
  } else {
    return <EnrolElement/>
  }
};

class PageTopSectionPolicy extends React.Component {
  render() {
    return (
      <PageSection variant={PageSectionVariants.light}>
        <Grid>
          <GridItem lg={6}>
            <TextContent>
              <Text component="h1">Policy <b>Short Bank</b></Text>
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
    this.setState({bottomSection: getBottomElement()});
  }

  handleClick(val) {
    //alert('boom');
    bottomFrame = val;
    this.setState({bottomSection: getBottomElement()});
  };

  render() {
    return (
      <React.Fragment>
        <PageTopSectionPolicy handleClick={this.handleClick}/>
        {this.state.bottomSection}
      </React.Fragment>
    );
  }
}

export default Policy;