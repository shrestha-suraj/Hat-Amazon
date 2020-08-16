export const addItemToCart=(cartItems,cartItemToAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id)
    if(existingCartItem){
        return cartItems.map(
            cartItem=>cartItem.id===cartItemToAdd.id?
            {...cartItem, quantity:cartItem.quantity+1}:{...cartItem})
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const deleteItemFromCart=(cartItems,itemId)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===itemId)
    if(existingCartItem){
        return cartItems.filter(cartItem=>cartItem.id!==itemId)
    }
    return [...cartItems]
}

export const decreaseItemFromCart=(cartItems,cartItemToDecrease)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToDecrease.id)
    if(existingCartItem){
        return cartItems.map(cartItem=>cartItem.id===cartItemToDecrease.id?
            {...cartItem,quantity:cartItem.quantity-1}:{...cartItem}
            )
    }

    return [...cartItems]
}