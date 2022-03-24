import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import './PostItem.css'
import { useState } from "react";


function PostItem(props) {

    const [show, setShow] = useState(false)

    let date = props.date

    
    function handleDelete() {
        console.log(props.id);
    }

    function handleEdit() {
        alert('click edit')
    }

    return(
        <li className="item">
            <div className="control-post">
                <FontAwesomeIcon className="fa edit" icon={faEdit} onClick={handleEdit}/>
                <FontAwesomeIcon className="fa delete" icon={faTrash} onClick={handleDelete}/>
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div>
                    {
                        date
                    }
                </div>
            <div className="actions">
                <button onClick={() => setShow(true) }>Show More</button>
            </div> 
            </div>
        </li>
    )
}

export default PostItem