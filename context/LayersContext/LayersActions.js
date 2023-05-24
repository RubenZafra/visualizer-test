import { TYPES } from "./LayersTypes"


export const initialValue = {
    points: [],
    materials: [],
    filteredMaterials: [],
    isMaterialMenuOpen: false,
    isLoading:  false,
    furnitureName: '', 
    materialLayer: { entrepaños: '', encimera: '', frente: '', pavimento: '' }
}

export const reducer = (state, action) => {

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
                materialLayer: {...state.materialLayer,  [state.furnitureName.toLowerCase()]: action.payload.materialLayer},
            }
        default:
            return state
    }
}