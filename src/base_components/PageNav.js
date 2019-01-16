import React from "react";
import {global_breakpoint_md as breakpointMd} from "@patternfly/react-tokens";
import {menu} from "../integration/Integration";
import {Nav, NavItem, NavList, NavVariants} from "@patternfly/react-core";

class PageNav extends React.Component {
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

  componentDidMount() {
    let menus = menu.map((mnu) => {
      return(
        <NavItem key={mnu.menuId} to={mnu.navLink} itemId={mnu.menuId} onClick={() => this.props.handleClick(mnu.menuPage)}>
          {mnu.menuName}
        </NavItem>
      )
    });
    this.setState({menus:menus});
  }

  render() {
    return (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList variant={NavVariants.horizontal}>
          {this.state.menus}
        </NavList>
      </Nav>
    )
  }
}

export default PageNav;