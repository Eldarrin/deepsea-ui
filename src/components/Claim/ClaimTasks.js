import React from 'react';
import {
  Button,
  DataList,
  DataListItem,
  DataListCell,
  DataListCheck,
  DataListAction,
  Grid,
  Text,
  TextVariants, GridItem, DropdownItem, KebabToggle, Dropdown, TextContent
} from '@patternfly/react-core';
import {BellIcon, CogIcon} from "@patternfly/react-icons";
import {global_breakpoint_md as breakpointMd} from "@patternfly/react-tokens";
import KebabDropDown from '../KebabDropdown';
import SimpleModal from "./Claim";

class ClaimTasks extends React.Component {
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
    const {isDropdownOpen, isKebabDropdownOpen, activeItem, isNavOpen} = this.state;

    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon/> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon/> Settings
      </DropdownItem>
    ];

    return (
      <div>
        <Grid>
          <GridItem lg={6}>
            <TextContent>
              <Text component={TextVariants.h3}>Claim Tasks</Text>
            </TextContent>
          </GridItem>
          <GridItem lg={6}>
            <TextContent>
              <div style={{textAlign: "right"}}>
                <Button variant="primary">Approve</Button>{' '}
                <Button variant="secondary">Refer</Button>{' '}
                <Button variant="danger">Decline</Button>
              </div>
            </TextContent>
          </GridItem>
        </Grid>
        <DataList aria-label="Checkbox and action data list example">
          <DataListItem aria-labelledby="check-action-item1">
            <DataListCheck aria-labelledby="check-action-item1" name="check-action-check1"/>
            <DataListCell>
              <span id="check-action-item1">Andrew Ward</span><br/>Claim Date: 10th Jan, 2019
            </DataListCell>
            <DataListCell>Accidental Damage Claim Submission</DataListCell>
            <DataListAction
              aria-labelledby="check-action-item1 check-action-action1"
              id="check-action-action1"
              aria-label="Actions"
            >
              <KebabDropDown/>
            </DataListAction>

          </DataListItem>
          <DataListItem aria-labelledby="check-action-item2">
            <DataListCheck aria-labelledby="check-action-item2" name="check-action-check2"/>
            <DataListCell>
              <span id="check-action-item2">Primary content - Lorem ipsum</span> dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod.
            </DataListCell>
            <DataListCell>Loss Claim Submission</DataListCell>
            <DataListAction
              aria-labelledby="check-action-item2 check-action-action2"
              id="check-action-action2"
              aria-label="Actions"
            />
          </DataListItem>
        </DataList>
      </div>
    );
  }
}

export default ClaimTasks;