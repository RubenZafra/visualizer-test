import { useContext, useEffect, useState } from "react";
import { LayersContext } from "../../../context/LayersContext/LayersContext";

export const MaterialCard = ({material}) => {

    const {name, materialPreview } = material;
    const { setMaterialLayer, layersState, setIsLoading } = useContext(LayersContext)
    const {isLoading} = layersState

    const handleClick = (materialLayer) => {
        setIsLoading(true)
        setMaterialLayer(materialLayer)
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }
  return (

    <>
        <img 
            src={materialPreview} 
            alt={name} 
            className="w-full h-full block border-2 border-slate-500 rounded-lg shadow-lg object-cover" 
            onClick={() => handleClick(Object.values(material.layers).toString())}
        />
        <div className="flex items-center justify-center">
            <h2 className="mt-4 font-medium">{name}</h2>
        </div>
    </>
       
  )
}
