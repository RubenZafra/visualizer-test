import { useCallback, useMemo, useReducer } from "react"
import { LayersContext } from "./LayersContext"
import { TYPES } from "./LayersTypes"
import { initialValue, reducer } from "./LayersActions"

const LayersProvider = ({children}) => {

    const [layersState, dispatch] = useReducer(reducer, initialValue)

    const setPoints = useCallback(points => {
        
        dispatch({
            type: TYPES.SET_POINTS,
            payload: {
                points
            }})
        }, [])

    const setInvisiblePoints = useCallback(boolean => {

        dispatch({
            type: TYPES.SET_INVISIBLE_POINTS,
            payload: {
                visiblePoints: boolean
            }})
        
    }, [])
    
    const setMaterials = useCallback(materials => {
        
        dispatch({
            type: TYPES.SET_MATERIALS,
            payload: {
                materials
            }})
        }, [])
    
    const setFilteredMaterials = useCallback((filteredMaterials, furnitureName) => {
        
        dispatch({
            type: TYPES.SET_FILTERED_MATERIALS,
            payload: {
                filteredMaterials,
                isMaterialMenuOpen: true, 
                isLoading: false,
                furnitureName: furnitureName
            }})
        }, [])

    const setIsLoading = useCallback((boolean) => {
        
        dispatch({
            type: TYPES.SET_IS_LOADING,
            payload: {
                isLoading: boolean
            }
            })
        }, [])
    
    const setMaterialLayer  = useCallback((materialLayer, furnitureName) => {
        
        dispatch({
            type: TYPES.SET_MATERIAL_LAYER,
            payload: {
                materialLayer: materialLayer, 
                furnitureName: furnitureName
            }})
        }, [])
    
    const layersData = useMemo(() => ({
        layersState,
        setPoints,
        setMaterials, 
        setFilteredMaterials, 
        setIsLoading, 
        setMaterialLayer, 
        setInvisiblePoints
    }), [layersState, setPoints, setMaterials, setFilteredMaterials, setIsLoading, setMaterialLayer, setInvisiblePoints])


    return (
        <LayersContext.Provider
            value={layersData}
        >
                {children}
        </LayersContext.Provider>
     )
    }

export default LayersProvider