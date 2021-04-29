import React from 'react'
import { useHistory } from 'react-router'
import StripeCheckout from 'react-stripe-checkout'
import {commerce} from '../../../lib/commerce'
function Payment({price,cart}) {
    console.log(cart)
    const history = useHistory()
    const key='pk_test_51Il0JECWkqckCo1t71NgC5L6IzJmtcr2dWSi7ROkWUjCDEbVB1cEOmnT877goxztDbnPU7PB98G1Ed0toDU5V4Wl00ehtv9PL8'
    // const  Timer =setTimeout(()=>{
    //     history.push('/')
        

    // },7000)
    const priceForStripe= price*100
    const onToken=(token)=>{
        if(token.object==='token'){
            alert('payment work')
            // console.log(commerce.ccart.refresh.line_items)
            // return commerce.cart.refresh()
            
            window.location.replace('/')

        }
    }
    return(
        <StripeCheckout 
          label='Pay Now'
          name="E-commerce-app"
          billingAdress
          shippingAddress
          description={`Your total is ${price}`}
          amount={priceForStripe}
          panelLabel="Pay Noww"
          token={onToken}
          stripeKey={key}
        />
        
    )
}

export default Payment
