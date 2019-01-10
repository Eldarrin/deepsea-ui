import React from 'react';
import {Page, PageSection, BackgroundImage, BackgroundImageSrc} from '@patternfly/react-core';
import Header from './base_components/Header';
import Enrolment from './components/Enrolment/Enrolment';
import Claim from './components/Claim/Claim';
import SimpleLoginPage from './components/SimpleLoginPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: Enrolment,
      enrolment: false,
      mainElement: null,
    };

  };

  components = {
    enrolment: Enrolment,
    claim: Claim,
  };

  getMainElement()
  {
    const EnrolElement = this.components.enrolment;
    const ClaimElement = this.components.claim;
    if (this.state.enrolment) {
      return <EnrolElement/>
    } else {
      return <ClaimElement/>
    }

  }

  handleClick() {
    this.state.enrolment = !this.state.enrolment;
    this.setState({mainElement: this.getMainElement()})
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

    let userData = { "username" : "Andy Ward", "avatarImg" : "/images/avatar.png"};

    return (
      <React.Fragment>
        <BackgroundImage src={bgImages}/>
        <Page onClick={() => this.handleClick()}>
          <Header userData={userData} />
          {this.state.mainElement}




        </Page>
      </React.Fragment>


    )
  }
}

export default App;

/*


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