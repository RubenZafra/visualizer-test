import { MaterialCard } from "../common/MaterialCard"

export const AsideContainer = ({materials, name}) => {

  return (

    <aside className="pl-28">
       <h2 className="text-2xl font-bold mb-8 text-center">{name}</h2> 
        {
            materials &&

            (materials.map(material => {
                return (
                    <div 
                        key={material.id} 
                        className='flex flex-col items-center hover:scale-105 transition-all cursor-pointer'
                    >
                        <MaterialCard material={material}/>
                    </div>
                )
            
            }))
        }
    </aside>
  )
}
