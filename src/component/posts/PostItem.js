import React  from "react";

import './PostItem.css'

function PostItem(props) {
    let date = new Date().toDateString()
    return(
        <li className="item">
            <div className="content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <span>{date}</span>
                <div>
                    similar posts
                </div>
            </div>
            <div className="actions">
                <button>Show More</button>
            </div> 
        </li>
    )
}

export default PostItem