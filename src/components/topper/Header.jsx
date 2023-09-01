import { LogoType } from '../logo/LogoType'
import { BurgerMenu } from './BurgerMenu'
import { ItemsNav } from './ItemsNav'

export const Header = () => {

  return (
    <>
      <div className=" bg-primary-color cursor-default">
        <p className="text-white pl-16 sm:pl-24 pt-1 pb-1  font-poppins text-[10px] sm:text-[15px]">Universidad Autónoma de Nicaragua </p>
      </div>
      <header className='flex place-content-between'>

        <LogoType type={ true }/>

        <ItemsNav />

        <BurgerMenu /> 
      </header>
    </>
  )
}
