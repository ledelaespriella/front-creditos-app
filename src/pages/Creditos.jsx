import React from "react";
import Header from "../components/sections/Header";
import SideBar from "../components/sections/SideBar";

const Creditos = () => {
  return <>
    <div className='d-flex w-100 h-100'>
      <SideBar />
      <div className='flex-grow-1 d-flex flex-column'>
        <Header />
        <div className='d-flex flex-grow-1 justify-content-center align-items-center'>
          <h1>Creditos</h1>
        </div>
      </div>
    </div>
  </>
}

export default Creditos