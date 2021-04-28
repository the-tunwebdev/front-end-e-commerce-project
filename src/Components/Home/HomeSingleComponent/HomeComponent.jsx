import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './home.scss'
function HomeComponent({path,content}) {
    return (
           <div className='menu-item'>
            
                <Link to={path} style={{textDecoration:'none',color:'black'}}>
                    <div className='content'>
                    <div className='title'>{content}s</div>
                    <span className='subtitle'>SHOP NOW</span>
                    </div>
                </Link>
                
            </div>
          
            
        
    )
}

export default HomeComponent
