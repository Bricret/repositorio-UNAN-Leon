import { Footer2 } from "./Footer2"
import seccion from "./seccion"

export const ItemsFooter = () => {
  return (
        <>
            <div className="flex flex-wrap md:justify-center justify-start mt-10 pb-32 pt-16 md:flex-row flex-col gap-24 px-10 md:px-0 text-third-color">
                {
                    seccion.map(( { title, seccion1, seccion2, seccion3 } , index ) => (
                        <section key={ index } className=" text-start">
                            <h2 className=" pb-6 font-bold text-2xl cursor-default">{ title }</h2>
                            <ul className="text-white">
                                <li className="mb-5 cursor-pointer" >{ seccion1 }</li>
                                <li className="mb-5 cursor-pointer" >{ seccion2 }</li>
                                <li className="mb-5 cursor-pointer" >{ seccion3 }</li>
                            </ul>  
                        </section> 
                    ))
                }
            </div>
            <Footer2 />
        </>
    )
}
