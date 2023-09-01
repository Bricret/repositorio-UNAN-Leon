import { Card } from "./Card"
import info from "./datos"


export const Cards = () => {
  return (
        <>
            <div className=" px-16  sm:py-14 pt-11 pb-9 sm:text-4xl text-3xl font-extrabold font-poppins text-[#2E2D29CC]">
                <p>Facultades</p>
            </div>
            
            <div className=" flex items-start justify-start  flex-wrap gap-8 mx-16 mb-11">

            {
                info.map((item, index) => (
                    <Card key={index} title={item.title} description={item.description} image={item.image}  link={ item.link }/>
                ))
            }

            </div>
        </>
    )
}
