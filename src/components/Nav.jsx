import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
      <>
        <nav>
        <Link to='/' >Home</Link>
        <Link to='/About' >About</Link>
        <Link to='/User' >User</Link>
        </nav>
      </>
    );
  };
  
  export default Nav;
   