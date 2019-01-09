import React from "react";
import {
    Card,
    CardBody,
    Gallery,
    GalleryItem,
    PageSection,
    PageSectionVariants,
    Text,
    TextContent
} from "@patternfly/react-core";
//import SimpleChart from './SimpleChart';


class DashboardBottomSection extends React.Component {
    render () {
        return (
            <PageSection>
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
            </PageSection>
        )
    }
}

//export default DashboardTopSection;
export default DashboardBottomSection;