import React, { Fragment } from "react";
import MenuAdmin from "../menus/menuAdmin";
import MenuFinalUser from "../menus/menuFinalUser";

let menu = undefined

const SideBar = (props) => {

  if (props.user == 'final') {
    menu = <MenuFinalUser/>
  }else{
    menu = <MenuAdmin/>
  }
  
  return (
    <Fragment>
      {menu}
    </Fragment>
  );
};

export default SideBar;
