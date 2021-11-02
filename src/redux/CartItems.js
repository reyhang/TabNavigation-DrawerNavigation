//Actions

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

const initialState = []

const cartItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
          return [...state,action.payload];
        
        case REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem.id !== action.payload)
    }//Eğer id dışarıdan gelen id'ye eşit değilse filtrele ve state i geri dön.
} 

export default cartItemReducer;