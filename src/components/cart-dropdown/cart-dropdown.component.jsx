import React from 'react'
import './cart-dropdown.component.scss'
import CustomButon from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import {connect} from 'react-redux'

const CartDropDown=({cartItems,history,toggleCart})=>{
    return(
        <div className="cart-drop-down">
            <div className="cart-items">
                {cartItems.length?cartItems.map(item=><CartItem key={item.id} item={item}/>):
                <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButon onClick={()=>{
                toggleCart()
                history.push('/checkout')
                }}>GO TO CHECKOUT</CustomButon>
        </div>
    )
}

const mapStateToProps=({cart:{cartItems}})=>({
    cartItems:cartItems
})

const mapDispatchToProps=(dispatch)=>({
    toggleCart:()=>dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown))