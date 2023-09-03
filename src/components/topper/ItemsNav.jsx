import { Search } from '../hero/Search';
import items from './navItems';


export const ItemsNav = () => {
  return (
        <>
        <div className=' bg-slate-500 text-white sm:text-black sm:bg-white sm:py-0 py-4 sm:pl-0 pl-7 sm:opacity-100 top-[-400px]'>
            <ul className='sm:flex sm:items-center z-[-1] sm:z-auto sm:static font-roboto'>
                {
                    items.map((value, index) => (
                        <li className={ value.StyleLi } key={ index }>
                            <a href={ value.link }  className={ value.StyleA }> { value.title } </a>
                        </li>
                    ))
                }
            <span className='sm:hidden px-8 font-poppins cursor-default'>Buscador</span>
            </ul>
            <div className='sm:hidden sm:py-0 py-4 text-black'>
                <Search />
            </div>
        </div>
        </>
    )
}