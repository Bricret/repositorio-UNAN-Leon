import CT from '../../assets/img/Edificio-central-unan-leon.jpg'


export const Card = () => {
  return (
        <>
            <div className="max-w-sm bg-white rounded-lg shadow  sm:my-6 my-6 border-[1px] border-[#dbdbdb]">
                <a href="#">
                <img className="rounded-t-lg" src={CT} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-600 ">Ciencias y tecnologias</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae hic officia voluptates ipsam reprehenderit, ab at incidunt quod natus, tempore, quam laboriosam nostrum! Nostrum repellat alias aliquam deleniti dicta?</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    ver mas
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </>
    )
}
