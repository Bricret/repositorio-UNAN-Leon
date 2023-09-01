import heroe from '../../assets/img/hero.jpg'

export const Hero = () => {
    

  return (
    <>
        <div className=" sm:h-screen h-96 grid text-center bg-cover bg-center" style={{ backgroundImage: `url(${heroe})` }}>
            <div className="col-start-1 row-start-1 bg-gray-950 bg-opacity-80 w-full h-full"></div>
            <div className="col-start-1 row-start-1 mx-auto my-auto">
                <p className=" text-white font-poppins sm:text-6xl text-3xl font-bold mb-16 cursor-default" >¿Qué estas buscando?</p>

                <form action="#" className="flex flex-col md:flex-row justify-start items-center gap-4 font-poppins font-semibold px-8" >
                    <input 
                        type= "text"
                        className= " sm:w-full w-full md:w-10/12 h-8 md:h-14 rounded-md sm:text-lg text-xs border-2 border-rose-500 px-4"
                        placeholder= "Escribe el nombre de examenes de grado o tesis"
                        //onSubmit={}
                    />
                    <button href='#' className=" bg-primary-color  rounded-md text-slate-50 text-xs md:text-base w-32 md:w-2/12 h-8 md:h-14">Buscar</button>
                </form>

                <p className="font-poppins mt-12 text-[#BBB] sm:text-[17px] text-[10px] cursor-default">Aquí encontraras todas las Tesis y exámenes de grado realizados por los estudiantes egresados de la UNAN-LEON </p>
            </div>
        </div> 
    </>
    )
}
