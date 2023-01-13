import React, { Fragment } from "react";
import MenuAdmin from "../menus/menuAdmin";
import MenuInt from "../menus/menuIntUser"

let menu = undefined

const SideBar = (props) => {

  console.log(props.user)

  if (props.user == 'Admin') {
    menu = <MenuAdmin/>
  }else{
    menu = <MenuInt/>
  }
  
  return (
    <Fragment>
      {menu}
    </Fragment>
  );
};

export default SideBar;
