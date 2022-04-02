import React from 'react'
import { useState, useEffect } from 'react'
import PostItem from '../component/posts/PostItem'
import './AllPosts.css'
import { db } from '../firebase'
import { onValue, ref, remove, update} from 'firebase/database'
import elasticlunr from 'elasticlunr';

function AllPostsPage() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [posts, setPosts] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [tempId, setTempId] = useState('')
    const [value, setValue] = useState('')
  
    let index = elasticlunr();
    index.addField('title')
    index.addField('description')
  
    //read
    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            setPosts([])
            const data = snapshot.val()
            if(data !== null) {
                Object.values(data).map((post) => {
                    setPosts(oldArray => [...oldArray, post])
                })
            }
        })    
    }, [])

    // delete 
    const handleDelete = (item) => {
      remove(ref(db, `/${item.id}`))
    }
    
    // update
    const handleUpdate = (item) => {
      setIsEdit(true)
      setTempId(item.id)
      setTitle(item.title)
      setDescription(item.description)
      document.documentElement.scrollTop = '0px'
    }
  
    const handleSubmitChange = () => {
      update(ref(db, `/${tempId}`), {
        title, 
        description,
        id: tempId
      })
      setTitle('')
      setDescription('')
      setIsEdit(false)
    }

    const filteredPosts = posts.filter(item => {
     return item.title.toLowerCase().includes(value.toLowerCase())
    })

    posts.forEach((item) => index.addDoc(item) )

    let groupedPosts = posts.reduce((prev, current) => {
        prev[current.id] = current
        return prev
    }, {})

    const [iTitle, setITitle] = useState('')

    const foundIDs = index.search(iTitle).map(item => item.ref)

    return(
        <div>
                <h1>All Posts</h1>
                <div className='search-block'>
                    <input className='search' type='search' placeholder='Please write text' onChange={e => setValue(e.target.value) } />
                </div>
                {isEdit  ? (
                    <div className='changes-block'>
                    <input type='text'   value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea type="textarea" rows='auto'  value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                    <button onClick={handleSubmitChange}>Change Add</button>
                    <button onClick={() => {
                        setIsEdit(false)
                        setTitle('')
                        setDescription('')
                    }}>Close</button>
                    </div>
                )
                :
                (
                    ''
                )
                }
            <section className='section-posts'>
                {
                    filteredPosts.reverse().map((item, index) => {
                        return   < PostItem posts={item} key={index} handleDelete={() => handleDelete(item)} handleUpdate={() => handleUpdate(item)} foundIDs={foundIDs} groupedPosts={groupedPosts}  setITitle={setITitle}/>
                    })
                }
            </section>
        </div>
        
        )
}

export default AllPostsPage