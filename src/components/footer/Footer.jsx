import logo from '../../assets/img/logo-UNAN.png'
import { ItemsFooter } from './ItemsFooter'


export const Footer = () => {
  return (
    <>
        <div className=" bg-[#192D76]">
            <div className='flex items-center'>
                <img src={logo} alt="Logo-Unanleon" className=' pt-4 sm:m-4 sm:mt-5 sm:w-36 sm:h-40' />
                <p className='font-roboto pl-2 bg-clip-text py-2 text-white'>
                <span className=' text-lg sm:text-2xl font-[700] '>UNAN </span> <span className='text-lg sm:text-3xl font-[700] '> - </span>
                <span className=' text-lg sm:text-2xl font-[700] '>LEON </span> <span className='text-xl sm:text-4xl font-[800] '> | </span>
                <span className=' text-xs sm:text-xl font-[400] '>REPOSITORIO</span>
                </p>
            </div>
        <ItemsFooter />
        </div>

    </>
        
    )
}
