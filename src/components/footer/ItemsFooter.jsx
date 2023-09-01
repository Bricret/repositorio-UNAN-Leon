import seccion from "./seccion"


export const ItemsFooter = () => {
  return (
        <>
            <div className="flex flex-wrap ml-24 mt-10 pb-32 pt-16  space-x-24 text-third-color">
                {
                    seccion.map(( value, index ) => (
                        <>
                        <section key={ index }>
                            <h2 className=" pb-6 font-bold text-2xl cursor-default">{value.title}</h2>
                            <ul className="text-white">
                                <li className="mb-5 cursor-pointer" >{value.seccion1}</li>
                                <li className="mb-5 cursor-pointer" >{value.seccion2}</li>
                                <li className="mb-5 cursor-pointer" >{value.seccion3}</li>
                            </ul>  
                        </section> 
                        </>
                    ))
                }
            </div>

            <div className="bg-primary-color text-white p-2 text-center">
                <p className=" font-serif text-ls">Universidad Nacional Autónoma de Nicaragua, León.</p>
                <p className=" font-roboto text-[12px]">Todos los derechos reservados ©2023  Brian Rico. </p>
            </div>
        </>
    )
}
