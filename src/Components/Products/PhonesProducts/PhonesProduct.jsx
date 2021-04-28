import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './product/product'
import useStyles from './style'

function PhonesProduct({products,AddToCart}) {
    const classes= useStyles()
    
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <Grid container justify="column" spacing={4}>
                    {products.map((product)=>(
                        <Grid item key={product.id}xs={12} sm={6} lg={3}>
                            <Product product={product} AddToCart={AddToCart} />


                        </Grid>
                    ))}

                </Grid>

            </div>
           
        </main>
    )
}

export default PhonesProduct
