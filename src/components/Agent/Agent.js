import React from "react";
import {Button, Grid, GridItem, PageSection, TextContent} from "@patternfly/react-core";
import PageTopSection from '../../base_components/PageTopSection';
import ScriptCard from './ScriptCard';
import IDVForm from './IDVForm';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import CustomerDetails from './CustomerDetails';

const mainComponents = {
  idvForm: IDVForm,
  searchForm: SearchForm,
  searchResults: SearchResults,
  customerDetails: CustomerDetails,
};

class PageTopSectionAgent extends React.Component {
  render() {
    return (
      <PageTopSection
        client={this.props.client}
        title={'Agent Desktop'}
        rightSection={<TextContent>
          <div style={{textAlign: "right"}}>
            <Button>Answer Call</Button>{' '}
            <Button>New Customer</Button>
          </div>
        </TextContent>}
      />
    )
  }
}

class PageBottomSectionAgent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightSection: null,
    };
    this.handleClick = this.handleClick.bind(this);
  };

  getRightElement(rightElement) {
    const IDVElement = mainComponents.idvForm;
    const SearchFormElement = mainComponents.searchForm;
    const SearchResultsElement = mainComponents.searchResults;
    const CustomerElement = mainComponents.customerDetails;
    if (rightElement === 'idv') {
      return <IDVElement handleClick={this.handleClick}/>
    }
    if (rightElement === 'searchF') {
      return <SearchFormElement handleClick={this.handleClick}/>
    }
    if (rightElement === 'searchR') {
      return <SearchResultsElement handleClick={this.handleClick}/>
    }
    if (rightElement === 'customer') {
      return <CustomerElement handleClick={this.handleClick}/>
    }
  };

  componentDidMount() {
    this.setState({rightSection: this.getRightElement('searchF')});
  }

  handleClick(val) {
    this.setState({rightSection: this.getRightElement(val)});
  };

  render() {
    return (
      <PageSection>
        <Grid gutter="md">
          <GridItem lg={3}>
            <TextContent>
              <ScriptCard/>
              <p>Generate Quote<br/>
                New Customer<br/>
                New Policy<br/>
                New Claim<br/>
                New Endorsement (MTA)<br/>
              </p>
            </TextContent>
          </GridItem>
          <GridItem lg={9}>
            {this.state.rightSection}
          </GridItem>
        </Grid>
      </PageSection>
    )
  }
}

class Agent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageTopSectionAgent client={this.props.client}/>
        <PageBottomSectionAgent client={this.props.client}/>
      </React.Fragment>
    );
  }
}

export default Agent;