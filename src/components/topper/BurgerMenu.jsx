export const BurgerMenu = () => {
  return (
    <>
        <ul className="hidden sm:flex sm:w-[438px] sm:mr-4 sm:place-content-around sm:items-center sm:font-[400] sm:text-[#605656]">
            <li className=''>
                <a href="#" className='w-[100%] px-3 py-1  hover:text-orange-400'>Pagina Principal</a>
            </li>
            <li>
            <a href="#" className='w-[100%] px-3 py-1 hover:text-orange-400'>Aulas virtuales</a>    
            </li>
            <li>
                <a href="#" className='w-[100%] px-3 py-1 hover:text-orange-400'>Contáctanos</a>
            </li>
        </ul>
        
        <div className='mr-6  mt-[24px]  sm:hidden cursor-pointer' >   
            <span className='block w-3/4 h-[5px] m-1 bg-black  rounded' ></span>
            <span className='block w-3/4 h-[5px] m-1 bg-black mt-1 rounded' ></span>
            <span className='block w-3/4 h-[5px] m-1 bg-black mt-1 rounded ' ></span>
            <span className='font-[poppins] text-xs underline hover:underline-offset-4'>Menu</span>
        </div>
    </>
  )
}
