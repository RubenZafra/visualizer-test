import { MaterialCard } from "../common/MaterialCard"

export const AsideContainer = ({materials, name}) => {

  return (

    <aside className="w-full flex flex-col items-center">
        <h2 className="text-lg font-bold mb-8">{name}</h2> 
        <div className="flex flex-row h-1/3 gap-4 w-full">
            {
                materials &&

                (materials.map(material => {
                    return (
                        <div 
                            key={material.id} 
                            className='w-1/3 h-full hover:scale-105 transition-all cursor-pointer'
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
