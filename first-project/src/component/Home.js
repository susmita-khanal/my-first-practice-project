import React from 'react';
import {Link} from "react-router-dom";

const Home = ({data}) => {
    return (
        <>
        
         <div className="home">
        <div className="img">
        <img className="image"
        src="https://th.bing.com/th/id/R.f966ba3aa1d379fa4c1868a5cc51ca66?rik=g5b0p4Bxoo2bew&pid=ImgRaw&r=0"
        alt="" />
        </div>
        <div className="postinfo">
        <div className="postid">{data?.id}</div>
        <div className="posttitle">{data?.title}</div>
        <div className="postbody">{data?.body}</div>
        </div>
        <Link to={`/detail/${data.id}`}>
        <button className="btn">Click Here</button>
        </Link>
        </div>
        
        
        </>
    )
}

export default Home
