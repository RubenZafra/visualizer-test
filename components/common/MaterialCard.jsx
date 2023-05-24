import { useContext, useEffect, useState } from "react";
import { LayersContext } from "../../context/LayersContext/LayersContext";

export const MaterialCard = ({material}) => {

    const {name, materialPreview } = material;
    const { setMaterialLayer } = useContext(LayersContext)

    const handleClick = (materialLayer) => {
        setMaterialLayer(materialLayer)
    }
  return (

    <>
        <img 
            src={materialPreview} 
            alt={name} 
            className="w-full h-1/2 border-2 border-slate-500 rounded-lg shadow-lg" 
            onClick={() => handleClick(Object.values(material.layers).toString())}
        />
        <div className="flex items-center justify-center">
            <h2 className="mt-4 font-medium">{name}</h2>
        </div>
    </>
       
  )
}
