import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 bg-white z-10'>
      <ul className='py-4 px-24 flex items-center gap-1'>
      <i className='bx bx-navigation text-xl'></i>
        <li className='text-xl text-[#3f3d56]'>GeoBuddy</li>
      </ul>
    </nav>
  )
}

export default Navbar
