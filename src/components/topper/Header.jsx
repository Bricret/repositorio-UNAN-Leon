import { LogoType } from '../logo/LogoType'
import { BurgerMenu } from './BurgerMenu'
import { ItemsNav } from './ItemsNav'
import { Nav1 } from './Nav1'

export const Header = () => {

  return (
    <>
      <Nav1 />
      <nav className='bg-white sm:flex flex-col md:flex-row items-center justify-between'>
        <div className='flex justify-between'>

          <LogoType type={ true }/>

          <BurgerMenu /> 
        </div>

        <ItemsNav />
    </nav>
    </>
  )
}

