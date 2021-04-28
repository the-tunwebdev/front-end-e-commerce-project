import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams, 
  useHistory
} from "react-router-dom";
import styled from 'styled-components'

import Header from './Header/Header';
import PhonesHome from './Components/Products/PhonesProducts/PhonesHome';
import PcHome from './Components/Products/PhonesProducts/PcProducts';

import {commerce} from './lib/commerce'
import HomePage from './Components/Home/Home';
import Carousel from 'react-elastic-carousel'
import { useMediaQuery } from 'react-responsive'
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
  // image for the pc type
  const PcImageItems= [
    {id: 1, title: "https://www.annfone.com/img/cms/mobiles-phones-banner.png"},
    {id: 2, title: 'https://nextshop.pk/wp-content/uploads/2018/08/New-Refurbished-Banner.jpg'},
    {id: 3, title: 'https://www.ataly.com/wp-content/uploads/2016/09/tech-banner-1.jpg'},
    
  ]
  // image for the mobile and tablet type(responsive)
  const MobileImageItems= [
    {id: 1, title: "https://img.bfmtv.com/images/352/1e452b75f56c15f03bfd894bf332a.jpg"},
    {id: 2, title: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-6s-202009?wid=600&hei=315&fmt=jpegqlt=95&.v=1599936770000'},
    {id: 3, title: 'https://www.presse-citron.net/app/uploads/2021/01/galaxy-s21-violet-design.jpg'},
    
  ]
  // selecting the tablet and the mobile type
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1300px)'
  })
  const Item= styled.img`
      
      height: 400px;
      width: 100%;
      
      
    `;

  
  

  return (
    <div className="App">
     
      <Router>
        <Header totalItems={cart.total_items}/>
         <Switch>
            <Route path='/phones' ><PhonesHome AddToCart={AddToCart} /></Route>
            <Route path='/cart'><Cart cart={cart} 
            handleUpdateCartQuantity={handleUpdateCartQuantity} 
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            /></Route>
            <Route path='/pc' ><PcHome AddToCart={AddToCart} /></Route>
            <Route  path='/acess' component={()=><h2>This part is no more available</h2>}/>

            <Route exact path='/'>
            <Carousel itemsToShow={1}>
                
                {isTabletOrMobileDevice ? MobileImageItems.map((item) => (
                    <Item src ={item.title }key={item.id}/>)):
                PcImageItems.map((item) => (
                  <Item src ={item.title }key={item.id}/>
                ))}
              </Carousel>
              
              <HomePage />
            </Route>
            
            
         </Switch>

      </Router>
      
      
      
    </div>
  );
}

export default App;
