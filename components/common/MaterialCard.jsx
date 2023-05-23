export const MaterialCard = ({material}) => {

    const {name, materialPreview } = material;
  return (

        <div className="bg-white rounded-lg shadow-lg w-44 mb-16">
            <img src={materialPreview} alt="" className="rounded-lg w-44 h-44" />
            <div className="flex justify-center items-center h-full">
                <h2 className="mb-4 text-xl">{name}</h2>
            </div>
        </div>  
  )
}
