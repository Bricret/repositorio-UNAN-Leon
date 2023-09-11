import { LogoType } from '../logo/LogoType'
import { BurgerMenu } from './BurgerMenu'


import { Nav1 } from './Nav1'

export const Header = () => {

  return (
    <>
      <Nav1 />
      <nav className='bg-white lg:flex flex-wrap md:flex-nowrap  py-1 lg:px-10 px-0 flex justify-between lg:w-full'>
          <LogoType type={ true }/>

          <BurgerMenu />
    </nav>
    </>
  )
}

