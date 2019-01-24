import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Grid,
  GridItem,
  PageSection
} from "@patternfly/react-core";
import ShieldAltIcon from "@patternfly/react-icons/dist/js/icons/shield-alt-icon";
import ErrorCircleOIcon from "@patternfly/react-icons/dist/js/icons/error-circle-o-icon";
import {AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar} from 'recharts';

const dashTopData = [
  {"total": 23174, "bad": 118, "pods": 10, "zone": "Enrolment", "errorText": "failures"},
  {"total": 4973, "bad": 14, "pods": 8, "zone": "Claims", "errorText": "fraudulent"},
  {"total": 8933, "bad": 418, "pods": 10, "zone": "Tasks", "errorText": "late"},
  {"total": 123, "bad": 118, "pods": 10, "zone": "Test", "errorText": "failures"},
  {"total": 123, "bad": 118, "pods": 10, "zone": "Test", "errorText": "failures"},
  {"total": 123, "bad": 118, "pods": 10, "zone": "Test", "errorText": "failures"},

];

const data = [
  {name: 'January', ClaimCost: 4000, Premium: 2400, amt: 2400},
  {name: 'February', ClaimCost: 3000, Premium: 1398, amt: 2210},
  {name: 'March', ClaimCost: 2000, Premium: 9800, amt: 2290},
  {name: 'April', ClaimCost: 2780, Premium: 3908, amt: 2000},
  {name: 'May', ClaimCost: 1890, Premium: 4800, amt: 2181},
  {name: 'June', ClaimCost: 2390, Premium: 3800, amt: 2500},
  {name: 'July', ClaimCost: 3490, Premium: 4300, amt: 2100},
  {name: 'August', ClaimCost: 0, Premium: 0, amt: 0},
];

const dataBar = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
];

//import SimpleChart from './SimpleChart';

class DashItemStd extends React.Component {
  render() {
    return (
      <GridItem span={2}>
        <Card style={{textAlign: "center", borderTop: "2px solid #0088ce"}}>
          <CardHeader style={{verticalAlign: "center"}}>
            {this.props.total} {this.props.header}
          </CardHeader>
          <CardBody>
            <ErrorCircleOIcon style={{color: "red"}}/> {this.props.bad} {this.props.errorText}
          </CardBody>
          <CardFooter>
            <ShieldAltIcon style={{color: "green"}}/> {this.props.pods} Pods
          </CardFooter>
        </Card>
      </GridItem>
    )
  }
}

class LongGraph extends React.Component {
  render() {
    return (
      <AreaChart width={this.props.width} height={250} data={data}
                 margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="ClaimCost" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="Premium" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    )
  }
}

class ShortGraph extends React.Component {
  render() {
    return (
      <BarChart width={this.props.width} height={250} data={dataBar}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    )
  }
}

class DashboardBottomSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dashTop: null,
      graphA: null,
      graphB: null,
    };
    this.graphA = React.createRef();
    this.graphB = React.createRef()
  }

  componentDidMount() {
    let dashTop = dashTopData.map((dsh) => {
      return (
        <DashItemStd icon={<ShieldAltIcon style={{color: "green"}}/>}
                     total={dsh.total}
                     bad={dsh.bad}
                     pods={dsh.pods}
                     errorText={dsh.errorText}
                     header={dsh.zone}/>
      )
    });
    this.setState({dashTop: dashTop});

    this.setState({graphA: <LongGraph width={this.graphA.current.offsetWidth}/>});
    this.setState({graphB: <ShortGraph width={this.graphB.current.offsetWidth}/>})
  }

  render() {
    return (
      <PageSection>
        <Grid gutter="md">
          {this.state.dashTop}
          <GridItem span={8}>
            <div ref={this.graphA}>
              {this.state.graphA}
            </div>
          </GridItem>
          <GridItem span={4}>
            <div ref={this.graphB}>
              {this.state.graphB}
            </div>
          </GridItem>
        </Grid>
      </PageSection>
    )
  }
}

//export default DashboardTopSection;
export default DashboardBottomSection;

/*

<Gallery gutter="md">
                    <GalleryItem key={0}>
                        <Card>

                        </Card>
                    </GalleryItem>
                    {Array.apply(1, Array(10)).map((x, i) => (
                        <GalleryItem key={i}>
                            <Card>
                                <CardBody>This is a card</CardBody>
                            </Card>
                        </GalleryItem>
                    ))}
                </Gallery>

 */