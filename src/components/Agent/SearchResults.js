import React from "react";
import {searchData} from "../../integration/Integration";
import {
  Card,
  CardBody,
  CardHeader, Form,
  Gallery,
  GalleryItem,
  Text,
  TextContent,
  TextVariants
} from "@patternfly/react-core";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search : [],
    }
  }

  doNothing() {

  }

  componentDidMount() {
    let search = searchData.map((src) => {
      return(
        <GalleryItem key={src.id}>
          <Card style={{cursor:"pointer"}} key={src.id} onClick={() => this.props.handleClick('idv')}>
            <CardHeader>({src.id}) {src.name}</CardHeader>
            <CardBody>{src.policyid}<br/>{src.address}<br/>{src.postcode}</CardBody>
          </Card>
        </GalleryItem>
      )
    });
    this.setState({search:search});
  }

  render() {
    return (
      <div>
        <TextContent>
          <Text component={TextVariants.h3}>Search Results</Text>
        </TextContent>
        <Gallery gutter="md">
          {this.state.search}
        </Gallery>
      </div>
    );
  }
}

export default SearchResults;