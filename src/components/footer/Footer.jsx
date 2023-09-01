import { LogoType } from '../logo/LogoType'
import { ItemsFooter } from './ItemsFooter'

export const Footer = () => {
  return (
    <>
        <div className=" bg-secondary-color">

            <LogoType type={ false }/>

            <ItemsFooter />
        </div>

    </>
        
    )
}
