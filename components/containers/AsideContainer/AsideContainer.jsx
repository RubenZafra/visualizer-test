import { MaterialCard } from "../../common/MaterialCard/MaterialCard"

export const AsideContainer = ({materials, name}) => {

  return (

    <aside className="w-full flex flex-col justify-center items-center lg:h-full">
        <h2 className="text-lg font-bold mb-8 lg:text-2xl">{name}</h2> 
        <div className="flex flex-row lg:flex-col justify-center h-20 sm:h-24 md:h-32 lg:h-full lg:justify-start gap-4 w-full lg:pl-8 ">
            {
                materials &&

                (materials.map(material => {
                    return (
                        <div 
                            key={material.id} 
                            className='w-20 sm:w-24 md:w-32 lg:w-32 lg:h-32 lg:mb-16 hover:scale-105 transition-all cursor-pointer'
                        >
                            <MaterialCard material={material}/>
                        </div>
                    )
                
                }))
            }
        </div>
        
    </aside>
  )
}
