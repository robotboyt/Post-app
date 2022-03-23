import React from 'react'
import { useHistory } from 'react-router-dom'
import NewPostForm from '../component/posts/NewPostForm'

function NewPostPage() {
    const history = useHistory()

    function  addPostHandler(postData) {
        fetch(
            'https://nerdy-soft-test-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
            {
                method: "POST",
                body: JSON.stringify(postData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).then(() => {
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