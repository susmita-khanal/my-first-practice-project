import React from 'react';
import {Link} from "react-router-dom";

const DetailPage = ({data}) => {
    return (
        <>
            {/* <section className="newPage"> */}
                <div className="comment">
                    <div className="info">{data?.postId}</div>
                    <div className="info">{data?.name}</div>
                   <div><Link className="info3">{data?.email}</Link></div> 
                    <div className="info4">{data?.body}</div>
                </div>
            {/* </section> */}
        </>
    )
}

export default DetailPage
