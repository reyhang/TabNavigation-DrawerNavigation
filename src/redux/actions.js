import axios from 'axios';
import {ADD_TO_CART, FETCH_BOOK, REMOVE_FROM_CART} from './actionTypes';


 const  fetchBooks = ()=> {
 
  return async dispatch => {
    try {
      const response = await axios.get("https://example-data.draftbit.com/books?_limit=10")
      if(response?.data) {
        dispatch({type:FETCH_BOOK,payload:response.data})
      }else{
        console.log('hataa var')
      }
    } catch (e) {
      console.log(e)
    }
   
  }} 

const addItemToCart = payload => dispatch =>
    dispatch[{type: ADD_TO_CART, payload}]

const removeFromCart = payload => dispatch => 
dispatch[{type:REMOVE_FROM_CART, payload}]

const removeAllCart =  dispatch =>
dispatch[{type:REMOVE_ALL_CART,payload}]

export  {fetchBooks,addItemToCart,removeFromCart,removeAllCart};




/*  payload = State'e güncellenecek data  */