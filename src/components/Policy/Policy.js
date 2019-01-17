import React from "react";
import {
  Button,
  TextContent
} from "@patternfly/react-core";
import EnrolmentForm from './EnrolmentForm';
import PageBottomSectionDashboard from './PolicyDash';
import PageTopSection from '../../base_components/PageTopSection';

let bottomFrame = 'dash';

const mainComponents = {
  enrolment: EnrolmentForm,
  dashboard: PageBottomSectionDashboard,
};

class PageTopSectionPolicy extends React.Component {
  render() {
    return (
      <PageTopSection
        client={this.props.client}
        title={'Policy'}
        rightSection={<TextContent>
          <div style={{textAlign: "right"}}>
            <Button>Search</Button>{' '}
            <Button onClick={() => {this.props.handleClick('enrolment')}}>New Policy</Button>
          </div>
        </TextContent>}
      />
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