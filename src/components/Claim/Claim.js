import React from "react";
import {
  Grid,
  GridItem,
  PageSection,
  PageSectionVariants,
  Text,
  TextContent, TextVariants
} from "@patternfly/react-core";
import ClaimForm from "./ClaimForm";
import SimpleChart from "../SimpleChart";
import ClaimTasks from './ClaimTasks';

class PageTopSectionClaim extends React.Component {
  render () {
    return (
      <PageSection variant={PageSectionVariants.light}>
        <Grid>
          <GridItem lg={6}>
            <TextContent>
              <Text component="h1">Claim <b>Short Bank</b></Text>
            </TextContent>
          </GridItem>
          <GridItem lg={6}>
            <TextContent>
              <div style={{textAlign: "right"}}>
                <ClaimForm/>
              </div>
            </TextContent>
          </GridItem>
        </Grid>
      </PageSection>
    )
  }
}

class PageBottomSectionClaim extends React.Component {
  render() {
    let chartDataToday = [{ x: 'AccDam', y: 155 }];
    chartDataToday.push({ x: 'Loss', y: 125 });
    chartDataToday.push({ x: 'Theft', y: 35 });
    let chartDataThisMonth = [{ x: 'AccDam', y: 3055 }];
    chartDataThisMonth.push({ x: 'Loss', y: 1525 });
    chartDataThisMonth.push({ x: 'Theft', y: 375 });
    let chartLegend = [
        { name: 'AccDam' }, { name: 'Loss' }, { name: 'Theft' }
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
                    <PageTopSectionClaim/>
                    <PageBottomSectionClaim/>
                </React.Fragment>
              );
            }
}

export default Claim;