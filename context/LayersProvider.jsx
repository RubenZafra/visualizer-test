import { useCallback, useMemo, useReducer } from "react"
import { LayersContext } from "./LayersContext"
import { TYPES } from "./LayersTypes"

const LayersProvider = ({children}) => {

    const initialValue = {
        points: [],
        materials: [],
        filteredMaterials: [],
        isMaterialMenuOpen: false,
        isLoading:  false,
        furnitureName: '', 
        materialLayer: ''
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case TYPES.SET_POINTS:
                return {
                    ...state,
                    points: action.payload.points,
                }
            case TYPES.SET_MATERIALS:
                return {
                    ...state,
                    materials: action.payload.materials,
                }
            case TYPES.SET_FILTERED_MATERIALS:
                return {
                    ...state,
                    filteredMaterials: action.payload.filteredMaterials,
                    isMaterialMenuOpen: true,
                    furnitureName: action.payload.furnitureName,
                    isLoading: false,
                }
            case TYPES.SET_IS_LOADING:
                return {
                    ...state,
                    isLoading: !isLoading,
                }
            case TYPES.SET_IS_MATERIAL_MENU_OPEN:
                return {
                    ...state,
                    isMaterialMenuOpen: action.payload.isMaterialMenuOpen,
                }
            case TYPES.SET_FURNITURE_NAME:
                return {
                    ...state,
                    furnitureName: action.payload.furnitureName,
                }
            case TYPES.SET_MATERIAL_LAYER:
                return {
                    ...state,
                    materialLayer: action.payload.materialLayer,
                }
            
            default:
                return state
        
        }
    }

    const [layersState, dispatch] = useReducer(reducer, initialValue)

    const setPoints = useCallback(points => {
        
        dispatch({
            type: TYPES.SET_POINTS,
            payload: {
                points
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

    const setIsLoading = useCallback(() => {
        
        dispatch({
            type: TYPES.SET_FILTERED_MATERIALS,
            payload: {
                
            }})
        }, [])

    const setIsMaterialMenuOpen  = useCallback((boolean) => {
        
        dispatch({
            type: TYPES.SET_FILTERED_MATERIALS,
            payload: {
                boolean
            }})
        }, [])
    
    const setFurnitureName  = useCallback((furnitureName) => {
        
        dispatch({
            type: TYPES.SET_FILTERED_MATERIALS,
            payload: {
                furnitureName
            }})
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
        setIsMaterialMenuOpen, 
        setFurnitureName, 
        setMaterialLayer
    }), [layersState, setPoints, setMaterials, setFilteredMaterials, setIsLoading, setIsMaterialMenuOpen, setFurnitureName, setMaterialLayer])


    return (
        <LayersContext.Provider
            value={layersData}
        >
                {children}
        </LayersContext.Provider>
     )
    }

export default LayersProvider