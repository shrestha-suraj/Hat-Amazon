import React from 'react'
import './stripe-button.styles.scss'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton=({price})=>{

    const priceForStripe=price*100
    const publishableKey="pk_test_YGqFTHM27Etv1yRGlbCcksMt00nxmNMYK7"

    const onToken=token=>{
        console.log(token);
        alert('Payment Successful')
    }

    return(
            <StripeCheckout
                label="Pay Now"
                name="Crown Clothing"
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your Total is $${price}`}
                amount={priceForStripe}
                panelLabel="Pay Now"
                token={onToken}
                stripeKey={publishableKey}
            />
    )
}

export default StripeButton