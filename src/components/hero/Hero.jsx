import heroe from '../../assets/img/hero.jpg'
import { UseForm } from "../../utils/hooks/useForm";

export const Hero = () => {
    


    const { Search, setSearch } = UseForm({
        search: '',
    });

  return (
    <>
        <div className=" sm:h-screen h-96 grid text-center bg-cover bg-center" style={{ backgroundImage: `url(${heroe})` }}>
            <div className="col-start-1 row-start-1 bg-gray-950 bg-opacity-80 w-full h-full"></div>
            <div className="col-start-1 row-start-1 mx-auto my-auto">
                <p className=" text-white font-poppins sm:text-6xl text-3xl font-bold mb-16" >¿Qué estas buscando?</p>
                <form action="#" className="flex font-poppins font-semibold" >
                    <input 
                        type="text"
                        className=" w-full h-[50px] fm mt-3 rounded-md text-lg border-2 border-rose-500 px-4"
                        placeholder="Escribe el nombre de examenes de grado o tesis"
                        //onSubmit={}
                    />
                    <button href='#' className=" bg-red-700 ml-3 mt-3 pl-8 pr-8 rounded-md text-slate-50 text-[20px]">Buscar</button>
                </form>
                <p className="font-poppins mt-12 text-[#BBB]">Aquí encontraras todas las Tesis y exámenes de grado realizados por los estudiantes egresados de la UNAN-LEON </p>
            </div>
        </div> 
    </>
    )
}
