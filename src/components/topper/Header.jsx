import { BurgerMenu } from './BurgerMenu'
import logo from '../../assets/img/logo-UNAN.png'

export const Header = () => {



  return (
    <>
      <div className=" bg-[#AB030C] ">
        <p className="text-white ml-10 lg:ml-20 pt-1 pb-1 font-poppins ">Universidad Autónoma de Nicaragua </p>
      </div>
      <header className='flex place-content-between'>
        <div className='flex items-center'>
          <img src={logo} alt="Logo-Unanleon" className='w-32 h-33 m-4 ' />
          <p className='font-roboto'>
            <span className='text-[#202C75] text-2xl font-[700] '>UNAN </span> <span className='text-[#000] text-2xl font-[700] '> - </span>
            <span className='text-[#910618] text-2xl font-[700] '>LEON </span> <span className='text-[#605656] text-3xl font-[800] '> | </span>
            <span className='text-[#605656] text-lg font-[400] '>REPOSITORIO</span>
          </p>
        </div>
        <BurgerMenu /> 
      </header>
    </>
  )
}
