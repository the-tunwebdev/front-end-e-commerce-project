import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './style'
function CartItem({item,updateCartQuantity,removeFromCart}) {
    const classes= useStyles()
    return (
        <Card>
            <CardMedia  alt={item.product_name} ><img src={item.media.source}  width='150px' /></CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography variant='h5'>{item.product_name}</Typography>
                <Typography variant='h5'>{item.price.formatted_with_symbol}</Typography>
                



            </CardContent>
            <CardActions className={classes.cardActions} >
                <div className={classes.buttons}>
                    <Button type='button' size="small" onClick={()=>updateCartQuantity(item.id,item.quantity -1)}> -</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size="small" onClick={()=>updateCartQuantity(item.id,item.quantity +1)}> +</Button>

                </div>
                <Button variant='contained' type='button' color='secondary' onClick={()=>removeFromCart(item.id)}>Remove</Button>

            </CardActions>
        </Card>
    )
}

export default CartItem
