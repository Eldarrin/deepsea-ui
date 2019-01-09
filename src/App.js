import React from 'react';
import {Page, BackgroundImage, BackgroundImageSrc} from '@patternfly/react-core';
import Header from './base_components/Header';
import Enrolment from './components/Enrolment';

class App extends React.Component {
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
        <BackgroundImage src={bgImages} />
        <Page>
          <Header/>
          <Enrolment/>

        </Page>
      </React.Fragment>
  )
  }
}

export default App;