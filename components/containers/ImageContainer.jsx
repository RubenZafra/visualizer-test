import { useState } from "react"
import { Point } from "../common/Point"

export const ImageContainer = ({points, materials}) => {

    const [filteredMaterials, setFilteredMaterials] = useState([])

    const handleClick = (point) => {
        console.log('clicked')
        setFilteredMaterials(materials.filter(material => Object.keys(material.layers) == point.id))
        
    }
    console.log(filteredMaterials)


  return (
<>
    <div 
    className='h-full z-10 relative w-2-3'
    >
        <img className="-z-10" src="https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554" alt="base-image" />
    
        { points.length > 0 &&
            points.map((point, index) => {
                return (
                    <div 
                        key={index}
                        onClick={() => handleClick(point)}                        
                    >
                        <Point 
                            className={`absolute h-8 w-8 bg-blue-500 rounded-full top-0 z-10`} 
                            style={{top: `${point.coordY}%`, left: `${point.coordX}%`}} 
                        />
                    </div>
                )
            }
            )
        }

    </div>
</>
    )
}
