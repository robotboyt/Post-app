import React from 'react'
import PostList from '../component/posts/PostList'
import './AllPosts.css'

const test_data = [
    {
        id: 'm1',
        title: 'This is a first President',
        description: 'Firts resident in Ukraine'
    },
    {
        id: '21',
        title: 'This is a first President',
        description: 'Firts resident in Ukraine'
    },
    {
        id: 'm1',
        title: 'This is a first President',
        description: 'Firts resident in Ukraine'
    },
    {
        id: '21',
        title: 'This is a first President',
        description: 'Firts resident in Ukraine'
    }
]


function AllPostsPage() {
    return(
        <div>
                <h1>All Posts</h1>
            <section className='section-posts'>
                <PostList posts={test_data} />
            </section>
        </div>
    )
}

export default AllPostsPage