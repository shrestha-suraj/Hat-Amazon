export const toggleCartHidden=()=>{
    return {
        type:'TOGGLE_CART_HIDDEN'
    }
}

export const addItem=(item)=>{
    return {
        type:'ADD_ITEM',
        payload:item
    }
}

export const deleteItem=(id)=>{
    return {
        type:'DELETE_ITEM',
        payload:id
    }
}

export const decreaseItem=(item)=>{
    return{
        type:'DECREASE_ITEM',
        payload:item
    }
}