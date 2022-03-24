import React, { useState } from "react";
import './NewPostForm.css'


function NewPostForm(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    let newDate = new Date().toDateString()
  
    function submitHandler(e) {
        e.preventDefault()

        
        if(title.length < 5) {
            alert('Please write a lot sumbols in Title')
            return false
        }

        if(description.length < 15) {
            alert('Please write a lot sumbols in Description')
            return false
        }

        setTitle('')
        setDescription('')

        const postData = {
            title: title, 
            description: description,
            date: newDate
        }
        
        props.onAddPost(postData)
    }

    return(
        <div className="form-block">
        <form className="form" onSubmit={submitHandler}>
            
            <div className="control">
                <label htmlFor="title">Post Title</label>
                <input type='text' required  id="title" value={title} onChange={(e) => setTitle(e.target.value)} ></input>
            </div>
            <div className="control">
                <label htmlFor="description">Post Description</label>
                <textarea id="description" required rows="5" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
            </div>
            <div className="actions">
                <button>Add Post</button>
            </div>
        </form>
        </div>
    )
}

export default NewPostForm