import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center py-3 bg-black justify-between'>
      <h1 className='text-white ml-5'><a href="">Logo</a></h1>
      <ul className='flex items-center space-x-5 text-white mr-10'>
        <li>About</li>
        <li>Project</li>
        <li>Blog</li>
      </ul>
    </header>
  )
}

export default Header
