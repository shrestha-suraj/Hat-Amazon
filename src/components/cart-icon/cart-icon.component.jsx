import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions.js'

const CartIcon=({toggleCartHidden,itemCount})=>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const matchStateToProps=({cart:{cartItems}})=>({
    itemCount:cartItems.reduce((accumulator,item)=>accumulator+item.quantity,0)
})

const matchDispatchToProps=(dispatch)=>(
    {
        toggleCartHidden:()=>dispatch(toggleCartHidden())
    }
)

export default connect(matchStateToProps,matchDispatchToProps)(CartIcon)