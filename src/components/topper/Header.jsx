import { LogoType } from '../logo/LogoType'
import { BurgerMenu } from './BurgerMenu'
import { Nav1 } from './Nav1'

export const Header = () => {

  return (
    <>
      <Nav1 />
      <nav className='bg-white sm:flex flex-col md:flex-row'>
        <div className='flex justify-between w-full'>

          <LogoType type={ true }/>

          <BurgerMenu /> 
        </div>


    </nav>
    </>
  )
}

