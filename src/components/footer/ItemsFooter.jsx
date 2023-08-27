
export const ItemsFooter = () => {
  return (
        <>
            <div className=" flex flex-wrap ml-44 mt-10 pb-20  space-x-14 text-[#F5D64C] ">
                <section>
                    <h2  className=" pb-4 font-bold text-xl">Ubícanos</h2>
                    <ul className="text-white space-y-4">
                        <li><span className=" block">Edificio Central contiguo a</span>la iglesia la merced, león</li>
                    </ul>
                </section>

                <section>
                    <h2 className=" pb-4 font-bold text-xl">Universidad</h2>
                    <ul className="text-white space-y-4">
                        <li>estatuas UNAN-Leon</li>
                        <li>Reseña Histórica de la UNAN-León</li>
                        <li>Pensamiento Estratégico</li>
                    </ul>
                </section>

                <section>
                    <h2  className=" pb-4 font-bold text-xl">Recursos</h2>
                    <ul className="text-white space-y-4">
                        <li>Sistema de Bibliotecas - SIBUL</li>
                        <li>Portal de Revistas:Científica y Literarias</li>
                    </ul>
                </section>

                <section>
                    <h2  className=" pb-4 font-bold text-xl">Servicios</h2>
                    <ul className="text-white space-y-4">
                        <li>Red Wifi</li>
                        <li>Guía Telefónica</li>
                        <li>Correo Office 365</li>
                    </ul>
                </section>
                
            </div>

            <div className="bg-[#930A18] text-white p-2 text-center">
                <p className=" font-serif text-ls">Universidad Nacional Autónoma de Nicaragua, León.</p>
                <p className=" font-roboto text-[12px]">Todos los derechos reservados ©2023  Brian Rico. </p>
            </div>
        </>
    )
}
