import React, { useState,useEffect } from 'react'
import {commerce} from '../../../lib/commerce'
import PhonesProduct from './PhonesProduct'
function PhonesHome() {
    const [products,setProducts]= useState([])
    const fectchdata= async()=>{
        const {data} = await commerce.products.list()
        const result = data.filter(single => single.categories[0].name==="phones");
        setProducts(result)
        
        console.log(result)
        // console.log(data)
     
    }
  useEffect(()=>{
    fectchdata()

  },[])

    return (
        <div>
            <PhonesProduct products={products}  />
            
        </div>
    )
}

export default PhonesHome
