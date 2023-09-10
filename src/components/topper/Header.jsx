import { LogoType } from '../logo/LogoType'
// import { BurgerMenu } from './BurgerMenu'
import { ItemsNav } from './ItemsNav'
import { Nav1 } from './Nav1'

export const Header = () => {

  return (
    <>
      <Nav1 />
      <nav className='bg-white sm:flex flex-wrap py-1 sm:px-10 px-0 flex justify-between w-full'>
          <LogoType type={ true }/>

          <ItemsNav />
    </nav>
    </>
  )
}

