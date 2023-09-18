import { Footer2 } from "./Footer2"
import { ItemsFooter } from "./ItemsFooter"
import seccion from "./seccion"

export const Footer1 = () => {
  return (
        <>
            <div className="flex flex-wrap md:justify-center justify-start mt-10 pb-32 pt-16 md:flex-row flex-col gap-24 px-10 md:px-0 text-third-color">
                {
                    seccion.map(( { title, seccion1, seccion2, seccion3, style, link1, link2, link3 } , index ) => (
                        <ItemsFooter key={index} title={ title } seccion1={ seccion1 } seccion2={ seccion2 } 
                            seccion3={seccion3} style={ style } link1={ link1 } link2={link2} link3={link3}/>
                    ))
                }
            </div>
            <Footer2 />
        </>
    )
}
