import items from './navItems';




export const ItemsNav = () => {
  return (
        <>
            <ul  className="hidden sm:flex sm:w-[438px] sm:mr-4 sm:place-content-around sm:items-center sm:font-[400] sm:text-[#605656]">
            <li className=''>
                {
                    items.map((value, index) => (
                    <a href={ value.link } key={ index } className={ value.Style }> { value.title } </a>
                    ))
                }
            </li>
        </ul>
        </>
    )
}
