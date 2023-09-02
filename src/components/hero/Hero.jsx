import heroe from '../../assets/img/hero.jpg'
import { Search } from './Search'

export const Hero = () => {
    

  return (
    <>
        <div className=" sm:h-screen h-96 grid text-center bg-cover bg-center" style={{ backgroundImage: `url(${heroe})` }}>
            <div className="col-start-1 row-start-1 bg-gray-950 bg-opacity-80 w-full h-full"></div>
            <div className="col-start-1 row-start-1 mx-auto my-auto">
                <p className=" text-white font-poppins sm:text-6xl text-3xl font-bold mb-16 cursor-default" >¿Qué estas buscando?</p>

                <Search />

                <p className="font-poppins mt-12 text-[#BBB] sm:text-[17px] text-[10px] cursor-default">Aquí encontraras todas las Tesis y exámenes de grado realizados por los estudiantes egresados de la UNAN-LEON </p>
            </div>
        </div> 
    </>
    )
}
