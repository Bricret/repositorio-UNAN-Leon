

export const Search = () => {
  return (
    <>
        <form action="#" className="flex flex-col md:flex-row justify-start items-center gap-4 font-poppins font-semibold px-8" >
            <input 
                type= "text"
                className= " sm:w-full w-full md:w-10/12 h-8 md:h-14 rounded-md sm:text-lg text-xs border-2 border-rose-500 px-4"
                placeholder= "Escribe el nombre de examenes de grado o tesis"
                //onSubmit={}
            />
            <button href='#' className=" bg-primary-color  rounded-md text-slate-50 text-xs md:text-base w-32 md:w-2/12 h-8 md:h-14">Buscar</button>
        </form>
    </>
  )
}
