import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PhonesProduct from './Components/Products/PhonesProducts/PhonesProduct';
import Header from './Header/Header';
import PhonesHome from './Components/Products/PhonesProducts/PhonesHome';
import {commerce} from './lib/commerce'

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
  

  return (
    <div className="App">
     
      <Router>
        <Header totalItems={cart.total_items} />
         <Switch>
            <Route path='/phones' ><PhonesHome AddToCart={AddToCart} /></Route>
            
            <Route exact path='/' component={()=><h1>hello</h1>} />
            
         </Switch>

      </Router>
      
      
      
    </div>
  );
}

export default App;
