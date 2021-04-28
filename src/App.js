import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Header from './Header/Header';
import PhonesHome from './Components/Products/PhonesProducts/PhonesHome';
import {commerce} from './lib/commerce'
import HomePage from './Components/Home/Home';

function App() {
  const [cart,setCart]= useState({})
  // fetch the cart item

  const fetchCart=async()=>{
    const cart= await commerce.cart.retrieve()
    setCart(cart)
  }
  // add to cart
  const AddToCart= async(productId,quantity)=>{
    const item= await commerce.cart.add(productId,quantity)
    setCart(item.cart)
  }
  useEffect(()=>{
    fetchCart()

  },[])
  console.log(cart)
  const handleUpdateCartQuantity=async(productId,quantity)=>{
    const response = await commerce.cart.update(productId,{quantity});
    setCart(response.cart)
  }
  const handleRemoveFromCart=async(productId)=>{
    const response = await commerce.cart.remove(productId)
    setCart(response.cart)

  }
  const handleEmptyCart=async()=>{
    const response = await commerce.cart.empty()
    setCart(response.cart)
  }

  return (
    <div className="App">
     
      <Router>
        <Header totalItems={cart.total_items} />
         <Switch>
            <Route path='/phones' ><PhonesHome AddToCart={AddToCart} /></Route>
            <Route path='/cart'><Cart cart={cart} 
            handleUpdateCartQuantity={handleUpdateCartQuantity} 
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            /></Route>
            
            <Route exact path='/'><HomePage /></Route>
            
         </Switch>

      </Router>
      
      
      
    </div>
  );
}

export default App;
