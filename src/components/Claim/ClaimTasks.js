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
  TextVariants, GridItem, DropdownItem, TextContent
} from '@patternfly/react-core';
import {BellIcon, CogIcon} from "@patternfly/react-icons";
import {global_breakpoint_md as breakpointMd} from "@patternfly/react-tokens";
import KebabDropDown from '../KebabDropdown';
import {claimTasks} from "../../integration/Integration";

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
      tasks: [],
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

  componentDidMount() {
    let tasks = claimTasks.map((tsk) => {
      return(
        <DataListItem key={tsk.taskId} aria-labelledby="check-action-item1">
          <DataListCheck aria-labelledby="check-action-item1" name="check-action-check1"/>
          <DataListCell>
            <span id="check-action-item1">{tsk.taskName}</span><br/>{tsk.taskText}
          </DataListCell>
          <DataListCell>{tsk.taskTitle}</DataListCell>
          <DataListAction
            aria-labelledby="check-action-item1 check-action-action1"
            id="check-action-action1"
            aria-label="Actions"
          >
            <KebabDropDown/>
          </DataListAction>

        </DataListItem>
      )
    });
    this.setState({tasks:tasks});
  }

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
        <DataList aria-label="claim-task-list">
          {this.state.tasks}
        </DataList>
      </div>
    );
  }
}

export default ClaimTasks;