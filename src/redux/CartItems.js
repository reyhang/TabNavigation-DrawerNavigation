/* import {ADD_TO_CART,REMOVE_FROM_CART,REMOVE_ALL_CART,FETCH_BOOK} from "./actionTypes"


const initialState = [];

const cartItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      return state.filter(cartItem => cartItem.id !== action.payload.id);
    //Eğer id dışarıdan gelen id'ye eşit değilse filtrele ve state i geri dön.
  
    case REMOVE_ALL_CART:
       try {
       return carts
      } catch (error) {
        console.log(error);
      } 
    
   case FETCH_BOOK:
      return {...state,books: action.payload}

  }  

  return state;
};

export default cartItemReducer;
 */