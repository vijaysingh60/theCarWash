import React from 'react'

function Navbar() {
  return (
    <div className='bg-red-400 w-full h-20 flex justify-between items-center px-20 fixed'>
        <div className='bg-yellow-300  w-20'>logo</div>
        <div>sign up</div>
        <div>login</div>
    </div>
  )
}

export default Navbar