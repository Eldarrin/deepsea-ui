import React from "react";
import {Grid, GridItem, PageSection, PageSectionVariants, Text, TextContent} from "@patternfly/react-core";
import SimpleModal from "./PageLayoutHorizontalNav";

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

export default PageTopSectionEnrolment;