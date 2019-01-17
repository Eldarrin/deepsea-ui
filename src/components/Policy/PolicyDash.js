import React from "react";
import {Grid, GridItem, PageSection} from "@patternfly/react-core";
import SimpleChart from "../SimpleChart";
import PolicyTasks from './PolicyTasks';
import { policyChartDataToday, policyChartDataThisMonth, policyChartLegend} from "../../integration/Integration";

class PageBottomSectionDashboard extends React.Component {
  render() {
    return (
      <PageSection>
        <Grid gutter="md">
          <GridItem lg={1}>
            <SimpleChart chartLegend={policyChartLegend} isLegend={true} clientName={this.props.client} title={"Today"}/>
            <p>Review Policy (New)<br/>
              Review Policy (Endorsement)<br/>
              Review Policy (MTA)<br/>
              New Endorsement<br/>
              Cancel policy<br/>
              Premium Refunds<br/>
              Premium Outstanding<br/>
              Reinstate Policy<br/>
              Renew Policy<br/>
              Issue Policy (Authorise/Release)<br/></p>
          </GridItem>
          <GridItem lg={2}>
            <SimpleChart chartData={policyChartDataToday} clientName={this.props.client} title={"Today"}/>
          </GridItem>
          <GridItem lg={2}>
            <SimpleChart chartData={policyChartDataThisMonth} clientName={this.props.client} title={"This Month"}/>
          </GridItem>
          <GridItem lg={1}/>
          <GridItem lg={6}>
            <PolicyTasks/>
          </GridItem>
        </Grid>
      </PageSection>
    )
  }
}

export default PageBottomSectionDashboard;