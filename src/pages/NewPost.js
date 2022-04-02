import React from 'react'
import { useHistory } from 'react-router-dom'
import NewPostForm from '../component/posts/NewPostForm'
import { db } from '../firebase'
import { ref, set} from 'firebase/database';
import {uid} from 'uid'

function NewPostPage() {
    const history = useHistory()

    function  addPostHandler(postData) {
        const id = uid()
        set(ref(db, `/${id}`), {
            title: postData.title,
            description: postData.description,
            date: postData.date,
            id: id
            
        }).then(() => {
            history.replace('/')
        })
    }

    return(
        <section>
            <h1>Add New Post</h1>
            < NewPostForm onAddPost={addPostHandler} /> 
        </section>
    )
}

export default NewPostPage