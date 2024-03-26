import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className=' flex justify-center  items-center h-24 gap-10 text-2xl'>
        <nav >
          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "tomato" : "",
                fontWeight: e.isActive ? "bold" : ""
              }
            }}
            to='/' >
            Home</NavLink>
          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "tomato" : "",
                fontWeight: e.isActive ? "bold" : ""
              }
            }}
            className='ml-10 mr-10' to='/about'>

            About
          </NavLink>


          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "tomato" : "",
                fontWeight: e.isActive ? "bold" : ""
              }
            }}
            to='/user' >User</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Nav;

