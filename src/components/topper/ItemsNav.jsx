import { Search } from '../hero/Search';
import items from './navItems';
import './style.css'
import PropTypes from 'prop-types';

export const ItemsNav = (props) => {

    const { sec } = props;
    console.log(sec);

  return (
        <>
        <div className={sec ? "showMenuNav" : "hideMenuNav"}>
            <ul className='w-[70%] sm:w-full h-screen sm:h-20 bg-black sm:bg-white opacity-100 sm:flex sm:items-center z-[-1] sm:z-auto sm:static font-roboto'>
                {
                    items.map((value, index) => (
                        <li className={ value.StyleLi } key={ index }>
                            <a href={ value.link }  className={ value.StyleA }> { value.title } </a>
                        </li>
                    ))
                }
                <hr className=' w-[95%] bg-[#3f3f3f] opacity-40 sm:hidden'/>
                <div className='sm:py-0 py-4 text-black sm:hidden'>
                    <span className='px-8 font-poppins cursor-default text-white opacity-70'>Buscador</span>
                    <Search />
                </div>
            </ul>
        </div>
        </>
    )
}

ItemsNav.propTypes = {
    sec : PropTypes.any,
}