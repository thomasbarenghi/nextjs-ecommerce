import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import adminReducer from "./slices/adminSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  admin: adminReducer,

});

export default rootReducer;

// import { combineReducers } from '@reduxjs/toolkit';
// //import todosReducer from './slides/todoSlide';
// import cartReducer from './slices/cartSlice';

// const rootReducer = combineReducers({
//  //todos: todosReducer,
//  cart: cartReducer,
// });

// export default rootReducer;
