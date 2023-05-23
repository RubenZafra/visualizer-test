import { MaterialCard } from "../common/MaterialCard"

export const AsideContainer = ({materials}) => {

  return (

    <aside className="ml-28">
        {
            materials &&
            materials.map(material => {
                return (
                    <div key={material.id} className='flex flex-col items-center'>
                        <MaterialCard name={material.name} image={material.materialPreview}/>
                    </div>
                )
            
            })
        }
    </aside>
  )
}
