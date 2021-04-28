import React, { useState,useEffect } from 'react'
import {commerce} from '../../../lib/commerce'
import PhonesProduct from './PhonesProduct'
import '../../Cart/loader.css'

function PhonesHome({AddToCart}) {
    const [products,setProducts]= useState([])
    const [loading,setLoading] = useState(false)
    // fetchng and filtering data 
    
    const fectchdata= async()=>{
        const {data} = await commerce.products.list()
        const result = data.filter(single => single.categories[0].name==="phones");

        setProducts(result)
        setLoading(true)
        
        
        // console.log(data)
     
    }
    
   
  useEffect(()=>{
    fectchdata()
    

  },[])
  

    return (
        <div>
          {loading ? <PhonesProduct products={products} AddToCart={AddToCart}   /> :
          <div className="loader"></div> }
            
            
        </div>
    )
}

export default PhonesHome
