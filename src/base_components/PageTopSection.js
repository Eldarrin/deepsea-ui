import React from "react";
import {Grid, GridItem, PageSection, PageSectionVariants, Text, TextContent} from "@patternfly/react-core";

class PageTopSection extends React.Component {
  render() {
    return (
      <PageSection variant={PageSectionVariants.light}>
        <Grid>
          <GridItem lg={6}>
            <TextContent>
              <Text component="h1"><b>{this.props.client}</b> {this.props.title}</Text>
            </TextContent>
          </GridItem>
          <GridItem lg={6}>
            {this.props.rightSection}
          </GridItem>
        </Grid>
      </PageSection>
    )
  }
}

export default PageTopSection;