import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Button, TextContent} from '@patternfly/react-core';
import {scriptData} from "../../integration/Integration";

class ScriptCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      script : [],
      scriptPos : 0,
    }
  }

  onNext(newPos) {
    // TODO: user newPos to examine scriptData, then find array position
    this.setState({scriptPos:newPos});
  }

  componentDidMount() {
    let script = scriptData.map((scp) => {
      return(
        <Card key={scp.step}>
          <CardHeader>({scp.step}) {scp.stepName}</CardHeader>
          <CardBody>{scp.stepScript}</CardBody>
          <CardFooter><TextContent>
            <div style={{textAlign: "right"}}>
              <Button onClick={() => this.onNext(scp.nextStep)} variant="secondary">Next</Button>
            </div>
          </TextContent></CardFooter>
        </Card>
      )
    });
    this.setState({script:script});
  }

  render() {
    return (
      <div>
      {this.state.script[this.state.scriptPos]}
      </div>
    );
  }
}

export default ScriptCard;