import React from "react";
import Header from "../components/sections/Header";
import Foot from "../components/sections/footer";
import SideBar from "../components/sections/sideBar";
import LogOut from '../components/buttons/logout'

const flag = false;

const Dashboard= (props) => {

  console.log(props)
 
  return (
    <section className="h-100">
      <div className="row h-100 w-100 m-0">
        
        <div className="col-3 p-0">
          <SideBar user = {props.user} />
        </div>

        <div className="col-12 col-lg-9 p-0 container-fluid">
          <Header  button = {<LogOut/>}/>

          <div className='m-3'>
            {props.page}
          </div>

          <Foot />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
