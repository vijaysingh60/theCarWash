import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home pt-48'>
        <Link className='bg-blue-700 mt-32 p-2 border-2 rounded-lg' to="/service">services</Link>
    </div>

  )
}

export default Home