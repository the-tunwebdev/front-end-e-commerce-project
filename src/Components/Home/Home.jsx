
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
        image:'https://www.sbsinformatique.com/img/cms/pc-build.jpg',
        id:'2'
    },
    {
        path:'/acess',
        content:'Accessories',
        image:'https://images.squarespace-cdn.com/content/v1/54f64a5de4b0fac03fe48095/1508393999319-VEYIFQPWMWOPUT8RBLZ4/ke17ZwdGBToddI8pDm48kJx1dffM5XEzku2PcltQNyF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hGaawTDWlunVGEFKwsEdnFEPBzLZDmAkZBVqdIKUbMcnUUnBgR-Z4zEehg67J4_kg/image-asset.jpeg',
        
        id:'3'
    }
    
]

    return(
        <div className='homepage'>
            <div className='directory-menu'>
                
                    {
                        
                        HomeData.map(data=>(
                            <HomeComponent key={data.id} path={data.path} content={data.content} image={data.image} />
                        ))
                    
                    }
                
            </div>
            

        </div>
            
    
    
            
                
            
           
       

    )
  
};

export default HomePage;