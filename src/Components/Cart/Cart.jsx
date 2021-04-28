import React from 'react'
import {Container,Typography,Button,Grid} from '@material-ui/core'
import useStyles from './style'
import './loader.css'
import CartItem from './CartItem/CartItem'
import Payment from './Payment/Payment'

function Cart({cart,handleUpdateCartQuantity,handleRemoveFromCart,handleEmptyCart}) {
    const classes=useStyles()
    
    
    
    const EmptyCart =()=>(
        <Typography variant='h4' style={{borderBottom :'1px solid #dc3545',color:'#dc3545'}} >is Empty try to add some products</Typography>

    )
    
    const FilledCart=()=>(
        <>
          <Grid container spacing={3}>
              {cart.line_items.map((item)=>(
                  <Grid item xs={12} sm={4} key={item.id}>
                      <CartItem updateCartQuantity={handleUpdateCartQuantity} removeFromCart={handleRemoveFromCart} item={item}/>
                  </Grid>
              ))}

          </Grid>
          <div className={classes.cardDetails}>
              <Typography variant="h5">
                  Subtotal :{cart.subtotal.formatted_with_symbol}

              </Typography>
              <div>
                  <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Empty</Button>
                  {/* <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary' onClick={<Payment price={cart.subtotal.formatted_with_symbol} />}>Checkout</Button> */}
                  <Payment    price={cart.subtotal.formatted_with_symbol} cart={cart}/>
              </div>

          </div>
        </>
    )
    if(!cart.line_items){
        return(
            <div className='loader'></div>
        )
    }
    
    return (
        <Container>
            
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
