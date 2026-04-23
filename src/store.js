import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
// Create a Redux store using configureStore from Redux Toolkit
 const store = configureStore({
    // Define the root reducer object, where the key 'cart' 
    // corresponds to the cartReducer imported from CartSlice.js.
    //  This allows us to manage the state of the cart in our application using Redux.
    reducer: {
        // 'cart' is the name of the slice in the store, and it's managed by cartReducer
        cart: cartReducer,
    },
});
export default store; // Export the store for use in the app (e.g., in <Provider store={store}>)
