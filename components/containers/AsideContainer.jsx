export const AsideContainer = ({materials}) => {

  return (

    <aside className='w-1/3'>

        {
            materials.length > 0 &&
            materials.map(material => {
                return (
                    <div key={material.id} className='flex flex-col items-center'>
                        <img src={material.image} alt={material.name} />
                    </div>
                )
            
            })
        }

    </aside>
  )
}
