// import { Search } from '../hero/Search';
import { BurgerMenu } from './BurgerMenu';
import items from './navItems';
// import './style.css'
import PropTypes from 'prop-types';


export const ItemsNav = () => {

    // const { sec } = props;

  return (
        <>
            <BurgerMenu />
            <ul className=' sm:flex sm:items-center sm:pb-0 py-6 sm:py-0 absolute sm:static sm:bg-white bg-slate-200 sm:z-auto mt-28 mb-6 sm:mb-0 sm:mt-0 left-0 w-full sm:w-auto'>
                {/* <div className='sm:py-0 py-4 text-black sm:hidden mt-5'>
                    <Search />
                </div> */}
                <span className=' sm:hidden ml-4 cursor-default text-xl font-roboto'>Navegacion</span>
                {
                    items.map((value, index) => (
                        <li className={ value.StyleLi } key={ index }>
                            <a href={ value.link }  className={ value.StyleA }> { value.title } </a>
                        </li>
                    ))
                }
                <div className='sm:hidden'>
                    {/* <Search /> */}
                </div>
            </ul>
        </>
    )
}

ItemsNav.propTypes = {
    sec : PropTypes.any,
}