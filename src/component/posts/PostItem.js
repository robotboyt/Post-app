import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import './PostItem.css'
import { useState } from "react";



function PostItem(props) {
    const { title, description, date , id, } = props.posts
  
    const [show, setShow] = useState(false)

    function toogleShow() {
       setShow(!show)
    }

    function submitDelete() {
        props.handleDelete(props.id)
    }

    function submitEdit() {   
        props.handleUpdate(props)
    }

    let similarPost

    return(
            <div className="item"> 
                <div className="control-post">
                        <FontAwesomeIcon className="fa edit" icon={faEdit} title="Edit Post" onClick={submitEdit} />
                        <FontAwesomeIcon className="fa delete" icon={faTrash} title="Delete Post" onClick={submitDelete} />
                    </div>
                        <div className="content">
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <div className="bonus-text">
                                {show ?(
                                    <>
                                    <h2>{date}</h2>
                                    <div className="similar-posts">
                                        {
                                          similarPost = props.foundIDs.map( i => {
                                              if(i != id) {
                                                  return (
                                                      <div className="similar">
                                                           <h2>{props.groupedPosts[i].title}</h2>
                                                           <p>{props.groupedPosts[i].description}</p>
                                                      </div>
                                                  )
                                              } else if (i ) {
                                                  return ''
                                              }
                                           })
                                        }
                                    </div>
                                    </>
                                )
                                  :
                                  (
                                    ''
                                  ) 
                                  }
                                 
                                
                            </div>
                            </div>  
                        <div className="actions">
                            <button
                             onClick={() => {
                                toogleShow()
                                props.setITitle(title)
                            }}>Show More</button>
                        </div> 
        </div>
    )
}

export default PostItem