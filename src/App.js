import React from 'react';
import {
  Page,
  BackgroundImage,
  BackgroundImageSrc
} from '@patternfly/react-core';
import Policy from './components/Policy/Policy';
import Claim from './components/Claim/Claim';
import {clientData, userData} from './integration/Integration';
import Header from './base_components/Header';

const mainComponents = {
  policy: Policy,
  claim: Claim,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainElement: null,
    };
    this.handleClick = this.handleClick.bind(this);

  };

  static getMainElement(client, showPage)
  {
    const PolicyElement = mainComponents.policy;
    const ClaimElement = mainComponents.claim;
    if (showPage === 'policy') {
      return <PolicyElement client={client}/>
    } else if (showPage === 'claim'){
      return <ClaimElement client={client}/>
    }
  }


  handleClick(showPage) {
    if (typeof showPage === 'string') {
      this.setState({mainElement: App.getMainElement(clientData.clientName, showPage)})
    }
  }

  render() {
    const bgImages = {
      [BackgroundImageSrc.lg]: '/images/deepsea_1200.jpg',
      [BackgroundImageSrc.sm]: '/images/deepsea_768.jpg',
      [BackgroundImageSrc.sm2x]: '/images/deepsea_768.jpg',
      [BackgroundImageSrc.xs]: '/images/deepsea_567.jpg',
      [BackgroundImageSrc.xs2x]: '/images/deepsea_567.jpg',
      [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
    };

    return (
      <React.Fragment>
        <BackgroundImage src={bgImages}/>
        <Page>
          <Header userData={userData} handleClick={this.handleClick}/>
          {this.state.mainElement}




        </Page>
      </React.Fragment>


    )
  }
}

export default App;

/*
 onClick={() => this.handleClick()}



// LOGIN PAGE HAS CSS RESPONSIVE ISSUES
<SimpleLoginPage bgImages={bgImages}/>

//THIS IS THE STANDARD PAGE FORMAT
<Page>
  <Header userData={userData}/>
  <Claim/>

</Page>

// LOGIN PAGE HAS CSS RESPONSIVE ISSUES
<SimpleLoginPage bgImages={bgImages}/>
 */