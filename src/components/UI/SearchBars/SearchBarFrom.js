import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import classes from "./SearchBars.module.css";

function searchBar(props) {
  const { dropdownOpen, dropDownClickHandler, flightsFrom } = props;
  let flightFrom = flightsFrom.map(item => {
    return <DropdownItem key={item}>{item}</DropdownItem>;
  });

  return (
    <div className={classes.DropItem}>
      <Dropdown isOpen={dropdownOpen} toggle={dropDownClickHandler}>
        <DropdownToggle caret>{props.children}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>{props.children}</DropdownItem>
          {flightFrom}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default searchBar;
