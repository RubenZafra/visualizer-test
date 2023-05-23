import { useContext, useEffect, useState } from "react";
import { LayersContext } from "../../context/LayersContext";

export const MaterialCard = ({material}) => {

    const {name, materialPreview } = material;
    const { setMaterialLayer } = useContext(LayersContext)

    const handleClick = (materialLayer) => {
        setMaterialLayer(materialLayer)
    }
  return (

        <div 
            className="bg-white rounded-md shadow-lg w-44 mb-16"
            onClick={() => handleClick(Object.values(material.layers).toString())}
        >
            <img src={materialPreview} alt="" className="rounded-lg w-44 h-44" />
            <div className="flex items-center justify-center">
                <h2 className="mb-4 font-medium">{name}</h2>
            </div>
        </div>  
  )
}
