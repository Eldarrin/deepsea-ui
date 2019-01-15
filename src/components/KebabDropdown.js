import React, { Component } from 'react';
import { Dropdown, KebabToggle, DropdownItem } from '@patternfly/react-core';

export default class KebabDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onToggle = isOpen => {
    this.setState({
      isOpen
    });
  };

  onSelect = event => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="action" component="button">Approve</DropdownItem>,
      <DropdownItem key="action" component="button">Refer</DropdownItem>,
      <DropdownItem key="action" component="button">Decline</DropdownItem>,
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={<KebabToggle onToggle={this.onToggle} />}
        isOpen={isOpen}
        isPlain
        dropdownItems={dropdownItems}
      />
    );
  }
}