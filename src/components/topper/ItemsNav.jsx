import { items } from './navItems';
import { Search } from '../hero/Search';
import PropTypes from 'prop-types';


export const ItemsNav = (props) => {

    const { select } = props;
    console.log(select);

  return (
        <>
            <ul className={ `md:flex md:items-center md:pb-0 py-6 md:py-0  md:static md:bg-white bg-slate-200 text-center md:z-auto md:mb-0 md:mt-0 left-0 w-full md:w-auto transition-all duration-500 ease-in ${select ? 'block' : 'hidden'}` }>
                <div className='md:hidden'>
                    <Search />
                </div>
                {
                    items.map((value, index) => (
                        <li className={ value.StyleLi } key={ index }>
                            <a href={ value.link }  className={ value.StyleA }> { value.title } </a>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

ItemsNav.propTypes = {
    select : PropTypes.any,
}