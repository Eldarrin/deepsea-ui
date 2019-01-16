import React from "react";
import {
  Button,
  Grid,
  GridItem,
  PageSection,
  PageSectionVariants,
  Text,
  TextContent
} from "@patternfly/react-core";
import EnrolmentForm from './EnrolmentForm';
import PageBottomSectionDashboard from './PolicyDash';

let bottomFrame = 'dash';

const mainComponents = {
  enrolment: EnrolmentForm,
  dashboard: PageBottomSectionDashboard,
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

  static getBottomElement(client, cancelHandler) {
    const EnrolElement = mainComponents.enrolment;
    const DashElement = mainComponents.dashboard;
    if (bottomFrame === 'dash') {
      return <DashElement client={client}/>
    } else {
      return <EnrolElement client={client} cancelHandler={cancelHandler}/>
    }
  };

  setDash() {
    bottomFrame = 'dash';
    this.setState({bottomSection: Policy.getBottomElement(this.props.client)});
  };

  componentDidMount() {
    this.setState({bottomSection: Policy.getBottomElement(this.props.client)});
  }

  handleClick(val) {
    bottomFrame = val;
    this.setState({bottomSection: Policy.getBottomElement(this.props.client, () => this.setDash())});
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