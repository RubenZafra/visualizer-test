export const MaterialCard = ({name, image}) => {
  return (

        <div className="bg-white rounded-lg shadow-lg w-44 mb-16">
            <img src={image} alt="" className="rounded-lg w-44" />
            <div className="flex justify-center items-center h-full">
                <h2 className="font-bold mb-4 text-xl text-purple-800">{name}</h2>
            </div>
        </div>  
  )
}
