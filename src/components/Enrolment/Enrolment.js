import React from "react";
import {
  Grid,
  GridItem,
  PageSection,
  PageSectionVariants,
  Text,
  TextContent, TextVariants
} from "@patternfly/react-core";
import EnrolmentForm from "./EnrolmentForm";
import SimpleChart from "../SimpleChart";
import EnrolmentTasks from './EnrolmentTasks';

class PageTopSectionEnrolment extends React.Component {
  render () {
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
                <EnrolmentForm/>
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
    let chartDataToday = [{ x: 'Premium', y: 155 }];
    chartDataToday.push({ x: 'Standard', y: 125 });
    chartDataToday.push({ x: 'Basic', y: 35 });
    let chartDataThisMonth = [{ x: 'Premium', y: 3055 }];
    chartDataThisMonth.push({ x: 'Standard', y: 1525 });
    chartDataThisMonth.push({ x: 'Basic', y: 375 });
    let chartLegend = [
      { name: 'Premium' }, { name: 'Standard' }, { name: 'Basic' }
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

class Enrolment extends React.Component {
            render() {
              return (
                <React.Fragment>
                    <PageTopSectionEnrolment/>
                    <PageBottomSectionEnrolment/>
                </React.Fragment>
              );
            }
}

export default Enrolment;