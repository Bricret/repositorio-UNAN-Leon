import './style.css';   
import { useState } from 'react';

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

     const [select, setSelect] = useState( false );
     const [first, setFirst] = useState( originalID );
 
 
     const onPick = () => {
         select ? setFirst(originalID) : setFirst(newID);
         setSelect(!select);
     };
 

  return (
    <>
        
        <div id='bars__menu' onClick={ onPick } className='mx-6 my-9 sm:hidden cursor-pointer'>   
            <span id={first.line1} className='block w-6 h-[5px] m-1 bg-black  rounded' ></span>
            <span id={first.line2} className='block w-6 h-[5px] m-1 bg-black mt-1 rounded' ></span>
            <span id={first.line3} className='block w-6 h-[5px] m-1 bg-black mt-1 rounded ' ></span>
        </div>
    </>
  )
}





