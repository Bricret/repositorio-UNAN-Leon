import logo from '../../assets/img/logo-UNAN.png'

export const LogoType = (Props) => {

  const color1 = ['#AB030C', '#192D76', '#605656'];
  const color2 = ['#FFFFFF', '#FFFFFF', '#FFFFFF'];

  const color = Props.type ? color1 : color2;
 
  return (
    <>
        <div className='flex items-center'>
          <img src={logo} alt="Logo-Unanleon" className='w-20 h-24 pt-2 sm:m-4 sm:w-32 sm:h-36'/>
          <p className='font-roboto pl-2 bg-clip-text py-2 '>
            <span className=' text-lg sm:text-3xl font-[700]' style={{ "color": color[0] }}>UNAN </span> <span className='text-lg sm:text-3xl font-[700] ' style={{ "color": color[2] }}> - </span>
            <span className=' text-lg sm:text-3xl font-[700]' style={{ "color": color[1] }}>LEON </span> <span className='text-xl sm:text-4xl font-[800]' style={{ "color": color[2] }}> | </span>
            <span className=' text-xs sm:text-xl font-[400]' style={{ "color": color[2] }}> REPOSITORIO </span>
          </p>
        </div>
    </>
  )
}
