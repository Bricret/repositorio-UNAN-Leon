import { UseForm } from "../../utils/hooks/useForm";

export const Hero = () => {
    
    const { Search, setSearch } = UseForm({
        search: '',
    });

  return (
    <>
        <div className=" sm:h-screen h-96 grid text-center bg-cover bg-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/45/UNAN_Le%C3%B3n.jpg')]">
            <div className="col-start-1 row-start-1 bg-gray-950 bg-opacity-80 w-full h-full"></div>
            <div className="col-start-1 row-start-1 mx-auto my-auto">
                <p className=" text-white font-poppins sm:text-6xl font-bold">¿Qué estas buscando?</p>

            </div>
        </div> 
    </>
    )
}
