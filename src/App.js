import React from 'react';
import {
  Page,
  PageSection,
  BackgroundImage,
  BackgroundImageSrc,
  NavItem,
  Nav,
  NavList,
  NavVariants,
  DropdownItem,
  DropdownSeparator,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  Button,
  ButtonVariant,
  Dropdown,
  KebabToggle, DropdownToggle, PageHeader, Brand, Avatar
} from '@patternfly/react-core';
import Enrolment from './components/Enrolment/Enrolment';
import Claim from './components/Claim/Claim';
import SimpleLoginPage from './components/SimpleLoginPage';
import {global_breakpoint_md as breakpointMd} from "@patternfly/react-tokens";
import {BellIcon, CogIcon} from "@patternfly/react-icons";
import { css } from '@patternfly/react-styles';
import accessibleStyles from "@patternfly/patternfly-next/utilities/Accessibility/accessibility.css";
import spacingStyles from "@patternfly/patternfly-next/utilities/Spacing/spacing.css";
import brandImg from "./images/brand_logo_white.svg";

let mainPage = 'blank';

const mainComponents = {
  enrolment: Enrolment,
  claim: Claim,
};

function getMainElement()
{
  //alert(mainPage);
  const EnrolElement = mainComponents.enrolment;
  const ClaimElement = mainComponents.claim;
  if (mainPage === 'enrolment') {
    return <EnrolElement/>
  } else {
    return <ClaimElement/>
  }

}


class Header extends React.Component {
  constructor(props) {
    super(props);
    // Set initial isNavOpen state based on window width
    const isNavOpen = typeof window !== 'undefined' && window.innerWidth >= parseInt(breakpointMd.value, 10);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
      menus: [],
      isNavOpen
    };
  }

  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  onNavToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  onNavClick(navClicked) {
    mainPage = navClicked;
    //alert(mainPage);
  };

  componentDidMount() {
    /*
    fetch('http://deepsea-ui-menu.xxx.xxx/api/menu/')
      .then(menu => {
        return menu.json();
      }).then(data => {
      let menus = data.results.map((mnu) => {
        return(
          <NavItem key={mnu.menuId} to={'#nav-link' + mnu.menuId} itemId={mnu.menuId} >
          {mnu.menuName}
        </NavItem>
        )
      })
      this.setState({menus:menus});
    })
     */
    let menu = [{ "menuId" : 0, "menuName" : "Dashboard", "menuPage" : "blank", "navLink" : "#"},
      { "menuId" : 1, "menuName" : "Policy", "menuPage" : "enrolment", "navLink" : "#"},
      { "menuId" : 2, "menuName" : "Claim", "menuPage" : "claim", "navLink" : "#"},
      { "menuId" : 3, "menuName" : "Actuarial", "menuPage" : "blank", "navLink" : "#"},
      { "menuId" : 4, "menuName" : "Other", "menuPage" : "blank", "navLink" : "#"},
    ];

    let menus = menu.map((mnu) => {
      return(
        <NavItem key={mnu.menuId} to={mnu.navLink} itemId={mnu.menuId} onClick={() => this.onNavClick(mnu.menuPage)}>
          {mnu.menuName}
        </NavItem>
      )
    });
    this.setState({menus:menus});
  }

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem, isNavOpen } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList variant={NavVariants.horizontal}>
          {this.state.menus}
        </NavList>
      </Nav>
    );

    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon /> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem component="button">Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem component="button">Sign Out</DropdownItem>
    ];
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.srOnly, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="horizontal-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="horizontal-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.srOnly, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>{this.props.userData.username}</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );

    return (
      <PageHeader
        logo={<Brand src={brandImg} alt="Deepsea Logo" />}
        toolbar={PageToolbar}
        avatar={<Avatar src={this.props.userData.avatarImg} alt={this.props.userData.username} />}
        topNav={PageNav}
        onClick={this.props.handleClick}
      />
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: Enrolment,
      enrolment: false,
      mainElement: null,
    };
    this.handleClick = this.handleClick.bind(this);

  };

  handleClick() {
    //alert(mainPage);
    if (mainPage === "blank") {
      return;
    }
    this.setState({mainElement: getMainElement()})
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