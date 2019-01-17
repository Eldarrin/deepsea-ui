import React from "react";
import {
  Grid,
  GridItem,
  PageSection,
  TextContent
} from "@patternfly/react-core";
import ClaimForm from "./ClaimForm";
import SimpleChart from "../SimpleChart";
import ClaimTasks from './ClaimTasks';
import { claimChartDataThisMonth, claimChartDataToday, claimChartLegend } from "../../integration/Integration";
import PageTopSection from '../../base_components/PageTopSection';

class PageTopSectionClaim extends React.Component {
  render() {
    return (
      <PageTopSection
        client={this.props.client}
        title={'Claim'}
        rightSection={<TextContent>
          <div style={{textAlign: "right"}}>
            <ClaimForm/>
          </div>
        </TextContent>}
      />
    )
  }
}


class PageBottomSectionClaim extends React.Component {
  render() {
    return (
      <PageSection>
        <Grid gutter="md">
          <GridItem lg={1}>
            <SimpleChart chartLegend={claimChartLegend} isLegend={true} clientName={this.props.client} title={"Today"}/>
          </GridItem>
          <GridItem lg={2}>
            <SimpleChart chartData={claimChartDataToday} clientName={this.props.client} title={"Today"}/>
          </GridItem>
          <GridItem lg={2}>
            <SimpleChart chartData={claimChartDataThisMonth} clientName={this.props.client} title={"This Month"}/>
          </GridItem>
          <GridItem lg={1}/>
          <GridItem lg={6}>
              <ClaimTasks/>
          </GridItem>
        </Grid>
      </PageSection>
    )
  }
}

class Claim extends React.Component {
            render() {
              return (
                <React.Fragment>
                    <PageTopSectionClaim client={this.props.client}/>
                    <PageBottomSectionClaim client={this.props.client}/>
                </React.Fragment>
              );
            }
}

export default Claim;