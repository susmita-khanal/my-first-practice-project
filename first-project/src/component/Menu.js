import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    const [stickyNavbar,setStickyNavbar]=useState(false);
    
    const handleScroll=()=>{
        if(window.scrollY > 100){
            setStickyNavbar(true);
        }
        else{
            setStickyNavbar(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return()=>window.removeEventListener("scroll",handleScroll);
        
    },[])
    return (
        <div>
            <nav className={`${stickyNavbar && "sticky-nav-bar"}`}>
                <div className="logo">
                    <h1>TRVL</h1>
                    </div>
            <div className="menu">
            <ul className="ullist">
           <li className="list"> <Link className="nav-link" to="/">Blog</Link></li>
           <li className="list"><Link className="nav-link" to="/details">Details</Link></li>
           <li className="list"><Link className="nav-link" to="/Service">Service</Link></li>
           <li className="list"><Link className="nav-link" to="/Product">Product</Link></li>
           <li className="list"> <Link className="nav-link" to="/Contact">Contact</Link></li>
           </ul>
           </div>
           </nav>
            </div>
        
    )
}

export default Menu
