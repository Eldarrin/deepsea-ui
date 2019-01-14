import React from "react";
import {Grid, GridItem, PageSection} from "@patternfly/react-core";
import SimpleChart from "./Enrolment";
import EnrolmentTasks from './EnrolmentTasks';

class PageBottomSectionDashboard extends React.Component {
  render() {
    let chartDataToday = [{x: 'Premium', y: 155}];
    chartDataToday.push({x: 'Standard', y: 125});
    chartDataToday.push({x: 'Basic', y: 35});
    let chartDataThisMonth = [{x: 'Premium', y: 3055}];
    chartDataThisMonth.push({x: 'Standard', y: 1525});
    chartDataThisMonth.push({x: 'Basic', y: 375});
    let chartLegend = [
      {name: 'Premium'}, {name: 'Standard'}, {name: 'Basic'}
    ];
    return (
      <PageSection>
        <Grid gutter="md">
          <GridItem lg={1}>
            <SimpleChart chartLegend={chartLegend} isLegend={true} clientName={"Short Bank"} title={"Today"}/>
          </GridItem>
          <GridItem lg={2}>
            <SimpleChart chartData={chartDataToday} clientName={"Short Bank"} title={"Today"}/>
          </GridItem>
          <GridItem lg={2}>
            <SimpleChart chartData={chartDataThisMonth} clientName={"Short Bank"} title={"This Month"}/>
          </GridItem>
          <GridItem lg={1}/>
          <GridItem lg={6}>
            <EnrolmentTasks/>
          </GridItem>
        </Grid>
      </PageSection>
    )
  }
}

export default PageBottomSectionDashboard;