import React, {useState,useEffect} from 'react';
import axios from "axios";
import Home from "./Home";


const Blog = (props) => {
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
const getBlog=async()=>{
    setLoading(true);
    const response=await axios.get("http://jsonplaceholder.typicode.com/posts");
    setData(response?.data);
    setLoading(false);
};
getBlog();
    },[])
    console.log(data);
    if(loading)return <p>loading...</p>;
    return (
        
        
        <div className="hero-section">
            <div className="container">
        <div className="blog-container">
            {data && data.length>0 && data.map((item,index)=>{
                return(
                    
                 
                    <Home key={index} data={item}/>
                  
                  
                )
            })}
           </div>  
        
        </div>
        </div>
        
    )
}

export default Blog
