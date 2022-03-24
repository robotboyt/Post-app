import React from 'react'
import PostItem from './PostItem'
import './PostList.css'

function PostList(props) {

    

    return(
        <ul className='list'>
                {props.posts.reverse().map(post => 
                <PostItem
                key={post.id} 
                id={post.id} 
                title={post.title}
                description={post.description}
                date={post.date} 
                post={post} />)}
        </ul >
    )
}

export default PostList