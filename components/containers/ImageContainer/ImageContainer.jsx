import { useContext } from "react"
import { Point } from "../../common/Point/Point"
import { AsideContainer } from "../AsideContainer/AsideContainer"
import { LayersContext } from "../../../context/LayersContext/LayersContext"
import { ColorRing } from "react-loader-spinner"

export const ImageContainer = ({points, materials}) => {

    const {setFilteredMaterials, layersState, setIsLoading, setInvisiblePoints} = useContext(LayersContext)
    const {isMaterialMenuOpen, isLoading, furnitureName, filteredMaterials, materialLayer, visiblePoints} = layersState

    const handleClick = async (point) => {

        setIsLoading(true)
        setInvisiblePoints(false)

        await setFilteredMaterials(materials.filter(material => Object.keys(material.layers).toString() === point.id), point.name)
            
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }

    const setVisiblePoints = () => {
        setInvisiblePoints(true)
    }

  return (
    <div className='flex flex-col h-3/4 p-4 lg:flex-row justify-between'>
        <div className='z-10 relative'>
            <img className="min-w-screen -z-30 top-0 left-0 relative rounded-md" onClick={() => setVisiblePoints()} src="https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554" alt="base-image" />
            {    
            <>
                {isLoading && 
                <div className="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 absolute text-black text-5xl">
                    <ColorRing />
                </div>
                }
                {materialLayer.frente && <img className="z-10 top-0 absolute rounded-md" onClick={() => setVisiblePoints()} src={materialLayer.frente} alt="base-image" />}
                {materialLayer.entrepaños && <img className="z-10 top-0 absolute rounded-md" onClick={() => setVisiblePoints()} src={materialLayer.entrepaños} alt="base-image" />}
                {materialLayer.pavimento && <img className="z-10 top-0 absolute rounded-md" onClick={() => setVisiblePoints()} src={materialLayer.pavimento} alt="base-image" />}
                {materialLayer.encimera && <img className="z-10 top-0 absolute rounded-md" onClick={() => setVisiblePoints()} src={materialLayer.encimera} alt="base-image" />}
            </>     
            }        
            { (points && visiblePoints) &&
                points.map((point, index) => {
                    return (
                        <div 
                            key={index}
                            onClick={() => handleClick(point)}
                            className="z-50"                        
                        >
                            <Point 
                                style={{top: `${point.coordY}%`, left: `${point.coordX}%`}} 
                            />
                        </div>
                    )
                })
            }
        </div>
        <div className="pt-4 bg-white">
            {
                isMaterialMenuOpen ?
                    <AsideContainer materials={filteredMaterials} name={furnitureName}/>
                    :
                <div></div>
            }
        </div>
    </div>
    )
}
