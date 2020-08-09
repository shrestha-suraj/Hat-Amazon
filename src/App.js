import React from "react"
import "./App.css"
import { Route, Switch} from "react-router-dom"

import HomePage from "./pages/homepage/homepage.component.jsx"
import ShopPage from "./pages/shoppage/shoppage.component.jsx"
import HatsPage from "./pages/hatspage/hatspage.component.jsx"
import Header from "./components/header/header.component.jsx"
import SignInAndSignUpPage from './pages/sign-in-and-signup/sign-in-and-signup.component.jsx'
import TestPage from './pages/testpage/testpage.component.jsx'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignInAndSignUpPage}/>
        <Route exact path="/shop/hats" component={HatsPage}/>
        <Route exact path="/test" component={TestPage}/>
        
      </Switch>
    </div>
  );
}

export default App;
