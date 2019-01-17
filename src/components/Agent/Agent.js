import React from "react";
import {Button, Grid, GridItem, PageSection, TextContent} from "@patternfly/react-core";
import PageTopSection from '../../base_components/PageTopSection';
import ScriptCard from './AgentScript';
//import AgentForm from "../Agent/Agent";

class PageTopSectionAgent extends React.Component {
  render() {
    return (
      <PageTopSection
        client={this.props.client}
        title={'Agent Desktop'}
        rightSection={<TextContent>
          <div style={{textAlign: "right"}}>
            <Button>Answer Call</Button>{' '}
            <Button>New Customer</Button>
          </div>
        </TextContent>}
      />
    )
  }
}

class PageBottomSectionAgent extends React.Component {
  render() {
    return (
      <PageSection>
        <Grid gutter="md">
          <GridItem lg={6}>
            <TextContent>
              <ScriptCard/>
              <p>ID&V<br/>
                Generate Quote<br/>
                New Customer<br/>
                New Policy<br/>
                New Claim<br/>
                New Request (Endorsement)<br/>
                New MTA<br/>
              </p>
            </TextContent>
          </GridItem>
          <GridItem lg={6}>
            <TextContent>
              Search Form
            </TextContent>
          </GridItem>
        </Grid>
      </PageSection>
    )
  }
}

class Agent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageTopSectionAgent client={this.props.client}/>
        <PageBottomSectionAgent client={this.props.client}/>
      </React.Fragment>
    );
  }
}

export default Agent;