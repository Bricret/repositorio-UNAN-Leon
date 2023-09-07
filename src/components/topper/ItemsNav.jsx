
import { Search } from '../hero/Search';
import items from './navItems';
import './style.css'
import PropTypes from 'prop-types';

export const ItemsNav = (props) => {

    const { sec } = props;

  return (
        <>
        <div className={sec ? "showMenuNav" : "hideMenuNav"}>
            <ul className='w-[70%] sm:w-full h-screen sm:h-20 bg-black sm:bg-white opacity-100 sm:flex sm:items-center z-[-1] sm:z-auto sm:static font-roboto'>
                <div className='sm:py-0 py-4 text-black sm:hidden mt-5'>
                    <Search />
                </div>
                <hr className=' w-[95%] bg-[#3f3f3f] opacity-40 sm:hidden mb-6'/>
                <span className=' sm:hidden ml-4 cursor-default text-xl font-roboto'>Navegacion</span>
                {
                    items.map((value, index) => (
                        <li className={ value.StyleLi } key={ index }>
                            <a href={ value.link }  className={ value.StyleA }> { value.title } </a>
                        </li>
                    ))
                }
                <hr className=' w-[95%] bg-[#3f3f3f] opacity-40 sm:hidden mb-6'/>

            </ul>
        </div>


        </>
    )
}

ItemsNav.propTypes = {
    sec : PropTypes.any,
}