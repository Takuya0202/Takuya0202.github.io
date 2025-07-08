import React from 'react'
import Border from './common/borders/Border'
import Button from './common/buttons/Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  return (
    <header className='flex items-center py-3 bg-black justify-around relative'>
      <h1 className='text-white ml-5'><a href="">Logo</a></h1>
      <ul className='flex items-center space-x-10 text-white mr-10'>
        <AnchorLink href='#about'>
          <Button>About</Button>
        </AnchorLink>
        <AnchorLink href='#project'>
          <Button>Project</Button>
        </AnchorLink>
        <AnchorLink href='#blog'>
          <Button>Blogs</Button>
        </AnchorLink>
      </ul>
      <Border direction='bottom'/>
    </header>
  )
}

export default Header
