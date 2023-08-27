import backImage from '../../assets/img/Edificio-central-unan-leon.jpg'

export const MidSite = () => {
  return (
    <>
        <div className=" sm:h-screen h-96 grid text-center bg-cover bg-center" style={{ backgroundImage: `url(${ backImage })` }}>
            <div className="col-start-1 row-start-1  w-full h-full"></div>
        </div> 

        <div className='sm:px-16 px-12 sm:py-40 w-3/4'>
            <h1 className=' sm:text-5xl text-3xl font-extrabold font-poppins text-[#2E2D29CC] pb-11'>Accesibilidad web</h1>
            <p className='font-light font-roboto text-xl text-[#999]'>La Universidad se compromete a proporcionar un entorno en línea que sea accesible para todos, 
            incluidas las personas con discapacidades.</p>
        </div>
    </>
    )
}
