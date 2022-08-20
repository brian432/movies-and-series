export const AppReducer =(state, action)=>{ 
    switch(action.type){
        case "CAMBIAR_A_SERIES":
            return {
                ...state,
                serie:true	
            }
        case "CAMBIAR_A_PELICULAS":
            return {
                ...state,
                serie:false
            }
        default:
            return state
    }
}