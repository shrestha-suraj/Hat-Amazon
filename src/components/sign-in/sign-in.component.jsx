import React from 'react'
import './sign-in.styles.sass'

class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit=e=>{
        e.preventDefault()
    }

    handleChange=e=>{
        const {value,name}= e.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" placeholder="Email" value={this.state.email} required onChange={this.handleChange}/>
                    <label for="email">Email</label>
                    <input name="password" type="password" placeholder="Password" value={this.state.password} required onChange={this.handleChange}/>
                    <label for="email">Password</label>
                    <input type="submit" value="SIGN IN"/>
                </form>
            </div>
        )
    }
}

export default SignIn