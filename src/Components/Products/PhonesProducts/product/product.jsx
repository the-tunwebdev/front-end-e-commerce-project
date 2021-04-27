import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles'

function Product({product}) {
    const classes= useStyles()
    console.log(product)
    return (
        <Card className={classes.root}>
            <CardMedia   title={product.name}><img src={product.media.source} width='150px' alt=""/></CardMedia>
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
                <IconButton aria-label="Add to cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>

            
        </Card>
    )
}

export default Product
