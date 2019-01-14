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
import PageBottomSectionDashboard from './EnrolmentDash';
import Claim from "../Claim/Claim";

const mainComponents = {
  enrolment: EnrolmentForm,
  dashboard: PageBottomSectionDashboard,
};

function getBottomElement() {
  const EnrolElement = mainComponents.enrolment;
  const DashElement = mainComponents.dashboard;
  return <EnrolElement/>
}

class PageTopSectionEnrolment extends React.Component {
  render() {
    return (
      <PageSection variant={PageSectionVariants.light}>
        <Grid>
          <GridItem lg={6}>
            <TextContent>
              <Text component="h1">Enrolment <b>Short Bank</b></Text>
            </TextContent>
          </GridItem>
          <GridItem lg={6}>
            <TextContent>
              <div style={{textAlign: "right"}}>
                <Button>Search</Button>{' '}
                <Button onClick={this.props.handleClick}>New Enrolment</Button>
              </div>
            </TextContent>
          </GridItem>
        </Grid>
      </PageSection>
    )
  }
}

class PageBottomSectionEnrolment extends React.Component {
  render() {
    return (
      <PageSection>
        <TextContent>
          This is the form
        </TextContent>
      </PageSection>
    )
  }
}


class Enrolment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomSection: null,
    };
    this.handleClick = this.handleClick.bind(this);

  };

  handleClick() {
    //alert('boom');
    this.setState({bottomSection: getBottomElement()});
  };

  render() {
    return (
      <React.Fragment>
        <PageTopSectionEnrolment handleClick={this.handleClick}/>
        {this.state.bottomSection}
      </React.Fragment>
    );
  }
}

export default Enrolment;