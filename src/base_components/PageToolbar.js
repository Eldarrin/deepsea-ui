import React from "react";
import {global_breakpoint_md as breakpointMd} from "@patternfly/react-tokens";
import {
  Avatar,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from "@patternfly/react-core";
import {BellIcon, CogIcon, ThIcon } from "@patternfly/react-icons";
import { css } from '@patternfly/react-styles';
import accessibleStyles from "@patternfly/patternfly-next/utilities/Accessibility/accessibility.css";

class PageToolbar extends React.Component {
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

  render() {
    const { isDropdownOpen } = this.state;

    const userDropdownItems = [
      <DropdownItem key={0} component="button">My Details</DropdownItem>,
      <DropdownItem key={1} isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem key={2}>Separated Link</DropdownItem>,
      <DropdownItem key={3} component="button">Sign Out</DropdownItem>
    ];

    return (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.srOnly, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="horizontal-example-uid-00" aria-label="AppSwitcher actions" variant={ButtonVariant.plain}>
              <ThIcon />
            </Button>
          </ToolbarItem>
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
          <ToolbarItem>
            <Avatar src={this.props.userData.avatarImg} alt={this.props.userData.username} />
          </ToolbarItem>
        </ToolbarGroup>

      </Toolbar>

    );
  }
}

export default PageToolbar;