import React from 'react'
import { Link } from 'react-router-dom'
import './MainNavigation.css'

function MainNavigation(){
    return(
        <header className='header'>
            <div className='logo'>React Posts</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Posts</Link> 
                    </li>
                    <li>
                        <Link to="/new-post">New Post</Link> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation