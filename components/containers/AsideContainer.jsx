import { MaterialCard } from "../common/MaterialCard"

export const AsideContainer = ({materials, name}) => {

  return (

    

    <aside className="pl-28">
        {name}
        {
            materials &&

            (materials.map(material => {
                return (
                    <div key={material.id} className='flex flex-col items-center hover:scale-105'>
                        <MaterialCard material={material}/>
                    </div>
                )
            
            }))
        }
    </aside>
  )
}
