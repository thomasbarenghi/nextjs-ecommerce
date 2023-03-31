import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
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
