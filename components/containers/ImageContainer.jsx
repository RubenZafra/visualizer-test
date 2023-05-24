import { useContext, useState } from "react"
import { Point } from "../common/Point"
import { AsideContainer } from "./AsideContainer"
import { LayersContext } from "../../context/LayersContext/LayersContext"

export const ImageContainer = ({points, materials}) => {

    const {setFilteredMaterials, layersState, setIsLoading, setIsMaterialMenuOpen, setFurnitureName} = useContext(LayersContext)

    const {isMaterialMenuOpen, isLoading, furnitureName, filteredMaterials, materialLayer} = layersState

    const handleClick = (point) => {

        setFilteredMaterials(materials.filter(material => Object.keys(material.layers).toString() === point.id), point.name)

    }

  return (
    <div className='flex flex-row min-h-full min-w-full px-28'>
        <div 
        className='h-full z-10 relative min-w-2/3'
        >
            <img className="min-w-screen -z-30 top-0 left-0 relative" src="https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554" alt="base-image" />
            {         
                materialLayer && <img className="min-w-screen z-10 top-0 absolute" src={materialLayer} alt="base-image" />
            }        
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
        <div className="pt-4 h-full min-w-1/3">
            {
                isMaterialMenuOpen &&
                    <AsideContainer materials={filteredMaterials} name={furnitureName}/>
      
            }
        </div>
        
    </div>
    )
}
