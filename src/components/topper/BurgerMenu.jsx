import { useState } from 'react'
import './style.css'

export const BurgerMenu = () => {
    
    const originalID = {
        line1: 'line1__bars-menu',
        line2: 'line2__bars-menu',
        line3: 'line3__bars-menu',
     };

     const newID = {
        line1: 'activeline1__bars-menu',
        line2: 'activeline2__bars-menu',
        line3: 'activeline3__bars-menu',
     };

 const [elementId, setElementId] = useState(originalID);
 
 const [stateNav, setStateNav] = useState(false);

 const animateBars = () => {
    
    stateNav ? setElementId(originalID) : setElementId(newID);
    setStateNav(!stateNav);
    
 };

  return (
    <>
        
        <div id='bars__menu' onClick={ animateBars } className='mr-6  mt-[24px]  sm:hidden cursor-pointer' >   
            <span id={elementId.line1} className='block w-3/4 h-[5px] m-1 bg-black  rounded' ></span>
            <span id={elementId.line2} className='block w-3/4 h-[5px] m-1 bg-black mt-1 rounded' ></span>
            <span id={elementId.line3} className='block w-3/4 h-[5px] m-1 bg-black mt-1 rounded ' ></span>
            <span className='font-[poppins] text-xs underline hover:underline-offset-4'>Menu</span>
        </div>

    </>
  )
}





