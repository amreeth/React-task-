export const allProducts = (state=[],action)=>{
    switch(action.type)
    {
        case 'ADD_PRODUCTS':
            return [...state,action.payload]
        default :
            return state
    }
}