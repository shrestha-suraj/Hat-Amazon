import React from 'react'
import './cart-dropdown.component.scss'
import CustomButon from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import {connect} from 'react-redux'

const CartDropDown=({cartItems})=>{
    return(
        <div className="cart-drop-down">
            <div className="cart-items">
                {cartItems.map(item=><CartItem id={item.id} item={item}/>)}
            </div>
            <CustomButon inverted>GO TO CHECKOUT</CustomButon>
        </div>
    )
}

const matchStateToProps=({cart:{cartItems}})=>({
    cartItems:cartItems
})

export default connect(matchStateToProps)(CartDropDown)