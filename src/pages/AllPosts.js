import React from 'react'
import { useState, useEffect } from 'react'
import PostList from '../component/posts/PostList'
import './AllPosts.css'


function AllPostsPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedPosts, setLoadedPosts] = useState([])

    useEffect(() => {
        setIsLoading(true)
         fetch('https://nerdy-soft-test-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
    )
    .then((response )=> {
        return response.json()
    })
    .then((data) => {
        const posts = []

        for (const key in data) {
            const post = {
                id: key,
                ...data[key]
            }

            posts.push(post)
            console.log(post.id);
        }

        setIsLoading(false)
        setLoadedPosts(posts)
    })
}, [])

   

    if(isLoading) {
        return(
        <section>
            <p className='loading-text'>Loading...</p>
        </section>
        )
    }

    return(
        <div>
                <h1>All Posts</h1>
            <section className='section-posts'>
                <PostList posts={loadedPosts} />
            </section>
        </div>
    )
}

export default AllPostsPage