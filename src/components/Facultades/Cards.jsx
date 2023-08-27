import { Card } from "./Card"


export const Cards = () => {
  return (
        <>
            <div className=" sm:px-16 px-12 sm:py-14 pt-11 pb-9 sm:text-4xl text-3xl font-extrabold font-poppins text-[#2E2D29CC]">
                <p>Facultades</p>
            </div>
            
            <div className=" flex items-start justify-start  flex-wrap gap-8 mx-16">
                <Card 
                />

                <Card
                />

                <Card
                />

                <Card
                />

                <Card
                />

                <Card
                />
            </div>
        </>
    )
}
