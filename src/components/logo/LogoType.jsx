import logo from '../../assets/img/logo-UNAN.png'
import { useSelect } from '../../hooks/useSelect'

export const LogoType = (Props) => {

    const color1 = {
        color1: '#AB030C',
        color2: '#192D76'
    };

    const color2 = {
        color1: 'text-white',
        color2: 'text-white'

    };

    const { first } = useSelect(Props.type, color1, color2);
  return (
    <>
        <div className='flex items-center'>
          <img src={logo} alt="Logo-Unanleon" className='w-20 h-24 pt-2 sm:m-4 sm:w-32 sm:h-36'/>
          <p className='font-roboto pl-2 bg-clip-text py-2 '>
            <span className=' text-lg sm:text-3xl font-[700]' style={{ "color": first.color1 }}>UNAN </span> <span className='text-[#000] text-lg sm:text-3xl font-[700] '> - </span>
            <span className=' text-lg sm:text-3xl font-[700] text-${first.color2}' style={{ "color": first.color2 }}>LEON </span> <span className='text-[#605656] text-xl sm:text-4xl font-[800] '> | </span>
            <span className=' text-xs sm:text-xl font-[400] text-[#605656]'> REPOSITORIO </span>
          </p>
        </div>
    </>
  )
}
