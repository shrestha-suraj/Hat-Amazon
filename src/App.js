import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";
import HatsPage from "./pages/hatspage/hatspage.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup.component.jsx";
import TestPage from "./pages/testpage/testpage.component.jsx";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

import {connect} from 'react-redux'
import {setCurrentuser} from './redux/user/user.actions'


class App extends React.Component {
  unsuscribeFromAuth = null;
  componentDidMount() {

    const {setCurrentUser}=this.props

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }else{
        setCurrentUser(user)
      }
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
          <Route exact path="/shop/hats" component={HatsPage} />
          <Route exact path="/test" component={TestPage} />
        </Switch>
      </div>
    );
  }
}

const matchDispatchToProps=dispatch=>({
  //Here we are inserting the action object in dispatch
  setCurrentUser:user=>dispatch(setCurrentuser(user))
})


export default connect(null,matchDispatchToProps)(App);
