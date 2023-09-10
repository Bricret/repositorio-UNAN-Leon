import { LogoType } from '../logo/LogoType'
import { ItemsFooter } from './ItemsFooter'

export const Footer = () => {
  return (
    <>
        <div className=" bg-secondary-color">
            <div className='py-3 sm:px-10 px-7'>
            <LogoType type={ false }/>
            </div>
            <ItemsFooter />
        </div>

    </>
        
    )
}