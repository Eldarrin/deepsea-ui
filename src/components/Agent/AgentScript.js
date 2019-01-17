import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Button, TextContent} from '@patternfly/react-core';

class ScriptCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>Wizard Steps</CardHeader>
        <CardBody>This is the script</CardBody>
        <CardFooter><TextContent>
          <div style={{textAlign: "right"}}>
            <Button variant="secondary">Next</Button>
          </div>
        </TextContent></CardFooter>
      </Card>
    );
  }
}

export default ScriptCard;