import React from 'react'
import './custom-button.styles.scss'

const CustomButon=({children,inverted,isGoogleSignIn,...otherProps})=>{
    return(
        <button className=
        {
            `${isGoogleSignIn?'google-sign-in':''} 
            ${inverted?'inverted':''}
            custom-button`} 
            {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButon