import { BurgerMenu } from './BurgerMenu'
import logo from '../../assets/img/logo-UNAN.png'

export const Header = () => {



  return (
    <>
      <div className=" bg-[#AB030C] ">
        <p className="text-white pl-16 sm:pl-24 pt-1 pb-1  font-poppins text-[10px] sm:text-[15px]">Universidad Autónoma de Nicaragua </p>
      </div>
      <header className='flex place-content-between'>
        <div className='flex items-center'>
          <img src={logo} alt="Logo-Unanleon" className='w-20 h-24 pt-2 sm:m-4 sm:w-32 sm:h-36' />
          <p className='font-roboto pl-2'>
            <span className='text-[#202C75] text-lg sm:text-3xl font-[700] '>UNAN </span> <span className='text-[#000] text-lg sm:text-3xl font-[700] '> - </span>
            <span className='text-[#910618] text-lg sm:text-3xl font-[700] '>LEON </span> <span className='text-[#605656] text-xl sm:text-4xl font-[800] '> | </span>
            <span className='text-[#605656] text-xs sm:text-xl font-[400] '>REPOSITORIO</span>
          </p>
        </div>
        <BurgerMenu /> 
      </header>
    </>
  )
}
