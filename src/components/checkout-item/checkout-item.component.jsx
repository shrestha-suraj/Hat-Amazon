import React from 'react'
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {deleteItem,addItem,decreaseItem} from '../../redux/cart/cart.actions'

const CheckoutItem=({cartItem,deleteItemFromCart,increaseItemInCart,decreaseItemInCart})=>{
    const {id,name,imageUrl,price,quantity}=cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>{
                    return quantity>1?decreaseItemInCart(cartItem):null
                }}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>increaseItemInCart(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={()=>deleteItemFromCart(id)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    deleteItemFromCart:(id)=>dispatch(deleteItem(id)),
    increaseItemInCart:(item)=>dispatch(addItem(item)),
    decreaseItemInCart:(item)=>dispatch(decreaseItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)