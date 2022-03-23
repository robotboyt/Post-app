import React from 'react'
import PostItem from './PostItem'
import './PostList.css'

function PostList(props) {
    return(
        <ul className='list'>
                {props.posts.map(post => <PostItem
                key={post.id} 
                id={post.id} title={post.title}
                description={post.description}
                post={post} />)}
        </ul >
    )
}

export default PostList