import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function User() {
  return (
    <>
      <div className='w-1/2 mx-auto mt-10'>
        <h1 className='text-red-200 text-5xl mb-2'>User</h1>
        <div className='flex  w-64 flex-col mt-5'>
          <Link
            className='p-2 bg-red-200 text-white mb-5 text-2xl hover:bg-red-500'
            to='/user/John'
          >John</Link>
          <Link
            className='p-2 bg-red-200 text-white mb-5 text-2xl hover:bg-red-500'
            to='/user/Don '
          >Don</Link> <Link
            className='p-2 bg-red-400 text-white mb-5 text-2xl hover:bg-red-500'
            to='/user/Vonn'
          >Vonn</Link>
        </div>
        <hr /> 
        <hr /> 
        <hr />
        <Outlet/>

      </div>
    </>
  )
}

export default User