import {addItemToCart,deleteItemFromCart,decreaseItemFromCart} from './cart.util'

const INITIAL_STATE={
    cartItems:[],
    hidden:true
}

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case 'TOGGLE_CART_HIDDEN':
            return{
                ...state,
                hidden:!state.hidden
            }
        case 'DELETE_ITEM':
            return{
                ...state,
                cartItems:deleteItemFromCart(state.cartItems,action.payload)
            }
        case 'DECREASE_ITEM':
            return {
                ...state,
                cartItems:decreaseItemFromCart(state.cartItems,action.payload)
            }
        default: return state;
    }
}

export default cartReducer