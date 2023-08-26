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

                <form action="#" className=" sm:flex   font-poppins font-semibold" >
                    <input 
                        type= "text"
                        className= " sm:w-full sm:h-[50px] w-10/12 h-6  mx-3 my-3 rounded-md sm:text-lg text-[10px] border-2 sm:border-rose-500 px-4"
                        placeholder= "Escribe el nombre de examenes de grado o tesis"
                        //onSubmit={}
                    />
                    <button href='#' className=" bg-[#AB030C] sm:ml-3 sm:mt-3 sm:pl-8 sm:pr-8 px-2 py-1 ml-3 rounded-md text-slate-50 sm:text-[20px] text-[10px]">Buscar</button>
                </form>

                <p className="font-poppins mt-12 text-[#BBB] sm:text-[17px] text-[10px]">Aquí encontraras todas las Tesis y exámenes de grado realizados por los estudiantes egresados de la UNAN-LEON </p>
            </div>
        </div> 
    </>
    )
}
