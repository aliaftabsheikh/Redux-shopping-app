import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { 
        itemLists: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.itemLists.find(item => item.id === newItem.id);

            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }else{
                state.itemLists.push({
                    id : newItem.id,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price,
                    name : newItem.name,
                });
                state.totalQuantity++;
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;

            const existingItem = state.itemLists.find(item => item.id === id);

            if(existingItem.quantity === 1){
                state.itemLists = state.itemLists.filter(item => item.id !== id);
                state.totalQuantity--;  
            }else{
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }   
        },
        setShowCart : (state, action) => {
            state.showCart = !state.showCart;
        }
    }
});


export const cartActions = cartSlice.actions;

export default cartSlice;