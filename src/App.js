import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddProducts from './Components/AddProducts';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import SignUp from './Components/SignUp';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/add-products" component={AddProducts}/>
        <Route path="/cart" component={Cart}/>       
        <Route component={NotFound}/>        
      </Switch>
    </BrowserRouter>
  )
}

export default App
