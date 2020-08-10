import React from 'react'
import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils.js'


class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            repeatPassword:''
        }
    }
    handleChange=e=>{
        const {name,value}=e.target
        this.setState({[name]:value})
    }

    handleSubmit=async e=>{
        const {displayName,email,password,repeatPassword} = this.state
        e.preventDefault()
        if(password!==repeatPassword){
            return alert("Password doesnot match")
        }

        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                repeatPassword:''
            })
        }catch(error){
            console.log("Error creating a new user")
        }
    }


    render(){
        return(
            <div className="sing-up">
                <div className="title">
                    <h2>I do not have an account</h2>
                    <span>Sign up with your email and password</span>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    label="Display Name"
                    name="displayName"
                    type="text"
                    value={this.state.displayName}
                    required
                    handleChange={this.handleChange}
                    />
                    <FormInput 
                    label="Email Address"
                    name="email"
                    type="email"
                    value={this.state.email}
                    required
                    handleChange={this.handleChange}
                    />
                    <FormInput 
                    label="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    required
                    handleChange={this.handleChange}
                    />
                    <FormInput 
                    label="Repeat Password"
                    name="repeatPassword"
                    type="password"
                    value={this.state.repeatPassword}
                    required
                    handleChange={this.handleChange}
                    />

                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>

            </div>
        )
    }



}

export default SignUp