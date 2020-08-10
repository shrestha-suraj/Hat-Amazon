const INITIAL_STATE={
    cartItems:0,
    hidden:true
}

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'INCREMENT_CART_ITEM':
            return{
                ...state,
                cartItems:state.cartItems+1
            }
        case 'TOGGLE_CART_HIDDEN':
            return{
                ...state,
                hidden:!state.hidden
            }
        default: return state;
    }
}

export default cartReducer