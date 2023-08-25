import burgerMenu from '../../assets/icons/menu-de-hamburguesas.svg'
export const NavBar = () => {
  return (
    <>
        <ul className="bg-slate-400 hidden sm:flex sm:w-[438px] sm:mr-4 sm:place-content-around sm:items-center sm:font-[400] sm:text-[#605656] sm:underline hover:underline-offset-1">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
            <a href="#">Aulas virtuales</a>    
            </li>
            <li>
                <a href="#">Contáctanos</a>
            </li>
        </ul>
        <div className='mr-9 mt-14 sm:hidden' >   
            <img 
                src={ burgerMenu } 
                alt="Menu hamburguesa"
                className='ml-1 w-9 cursor-pointer hover:underline ' 
            />
            <span className='font-[poppins] cursor-pointer hover:underline'>Menu</span>
        </div>
    </>
  )
}
