import { useState } from "react"
import { Point } from "../common/Point"
import { AsideContainer } from "./AsideContainer"

export const ImageContainer = ({points, materials}) => {

    const [filteredMaterials, setFilteredMaterials] = useState([])
    const [isMaterialMenuOpen, setIsMaterialMenuOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [furnitureName, setFurnitureName] = useState('')

    const handleClick = (point) => {
        setIsLoading(!isLoading)
        if (point.name == furnitureName && isMaterialMenuOpen) {
            setIsMaterialMenuOpen(false)
            setFurnitureName('')
        } else {
            setIsMaterialMenuOpen(true)
            setFurnitureName(point.name)
        }
        setFilteredMaterials(materials.filter(material => Object.keys(material.layers).toString() === point.id))
        setIsLoading(!isLoading)
        setFurnitureName(point.name)
    }

    console.log(filteredMaterials)
    console.log(isMaterialMenuOpen)


  return (
    <>
        <div 
        className='h-full z-10 relative min-w-2/3'
        >
            <img className="min-w-screen -z-10" src="https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554" alt="base-image" />
        
            { points &&
                points.map((point, index) => {
                    return (
                        <div 
                            key={index}
                            onClick={() => handleClick(point)}                        
                        >
                            <Point 
                                style={{top: `${point.coordY}%`, left: `${point.coordX}%`}} 
                            />
                        </div>
                    )
                })
            }
        </div>
        <div className=" pt-4">
            {
                isMaterialMenuOpen &&
                    <AsideContainer materials={filteredMaterials} name={furnitureName}/>
      
            }
        </div>
        
    </>
    )
}
