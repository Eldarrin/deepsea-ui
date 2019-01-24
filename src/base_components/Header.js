import React from 'react';
import {
  Brand,
  PageHeader,
} from '@patternfly/react-core';
import brandImg from '../images/brand_logo_white.svg';
import PageNav from './PageNav';
import PageToolbar from './PageToolbar';

class Header extends React.Component {
  render() {
    const logoProps = {
      href: 'https://github.com/Eldarrin/deepsea-ui',
      target: '_new',
    };

    return (
      <PageHeader
        logo={<Brand src={brandImg} alt="Deepsea Logo" />}
        logoProps={logoProps}
        toolbar={<PageToolbar userData={this.props.userData}/>}
        topNav={<PageNav handleClick={this.props.handleClick}/>}
      />
    );
  }
}

export default Header;
