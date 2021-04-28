import React,{useState} from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles'

function Product({product,AddToCart}) {
    const classes= useStyles()
    const [srcImage,setsrcImage]= useState(product.assets[0].url)
    // console.log(product)
    
    
    return (
        <Card className={classes.root}>
            <CardMedia   title={product.name}><img style={{display:'block',marginLeft:'auto',marginRight:'auto'}} src={srcImage}  width='150px' alt="" onMouseEnter={()=>setsrcImage(product.assets[1].url)}
                onMouseLeave={()=>setsrcImage(product.assets[0].url)}
            /></CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}

                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}

                    </Typography>

                </div>
                <Typography  dangerouslySetInnerHTML={{__html:product.description}}variant="h5" color="textSecondary"/>

            </CardContent> 
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to cart" onClick={()=>AddToCart(product.id,1)}> 
                    <AddShoppingCart />
                </IconButton>
            </CardActions>

            
        </Card>
    )
}

export default Product
