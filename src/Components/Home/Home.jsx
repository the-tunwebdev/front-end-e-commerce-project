
import React from 'react';
import './home.scss'

import HomeComponent from './HomeSingleComponent/HomeComponent';
const HomePage = () => {
    const HomeData=[
        {
        path:'/phones',
        content:'Phones',
        image:'https://cdn.mos.cms.futurecdn.net/gi4ofLVzjTvrTAjJCbLC53.jpg',
        id:'1'
    },
    {
        path:'/pc',
        content:'Pc',
        image:'',
        id:'2'
    },
    {
        path:'/acess',
        content:'Accessories',
        
        id:'3'
    }
    
]

    return(
        <div className='homepage'>
            <div className='directory-menu'>
                
                    {
                        
                        HomeData.map(data=>(
                            <HomeComponent key={data.id} path={data.path} content={data.content} />
                        ))
                    
                    }
                
            </div>
            

        </div>
            
    
    
            
                
            
           
       

    )
  
};

export default HomePage;