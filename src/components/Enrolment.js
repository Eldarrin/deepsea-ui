import React from "react";
import {
  BackgroundImage,
  Grid,
  GridItem, Page,
  PageSection,
  PageSectionVariants,
  Text,
  TextContent
} from "@patternfly/react-core";
import SimpleModal from "./SimpleModal";
import SimpleChart from "./SimpleChart";

class TestAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=5')
      .then(results => {
        return results.json();
      }).then(data => {
      let pictures = data.results.map((pic) => {
        return(
          <div key={pic.results}>
            <img src={pic.picture.medium} />
          </div>
        )
      })
      this.setState({pictures: pictures});
      console.log("state", this.state.pictures);
    })
  }

  render() {
    return (
      <div className="container2">
        <div className="container1">
          {this.state.pictures}
        </div>
      </div>
    )
  }
}

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
                <SimpleModal/>
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
    return (
      <PageSection>
        <Grid gutter="md">
          <GridItem lg={1}>
            <SimpleChart isLegend={true} clientName={"Short Bank"} title={"Today"}/>
          </GridItem>
          <GridItem lg={2}>
            <SimpleChart chartData={chartDataToday} clientName={"Short Bank"} title={"Today"}/>
          </GridItem>
          <GridItem lg={2}>
            <SimpleChart chartData={chartDataThisMonth} clientName={"Short Bank"} title={"This Month"}/>
          </GridItem>
          <GridItem lg={1}/>
          <GridItem lg={6}>
            <TestAPI/>
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