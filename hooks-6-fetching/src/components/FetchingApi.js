import React, { useState, useEffect } from 'react'
import axios from 'axios';
function FetchingApi() {
    const [post, setPost] = useState({})
    const [id, setId ] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)

    const handleChange = () => {
        setIdFromButton(id)
    }

    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
       .then(res => 
        {
            console.log(res)
            setPost(res.data)
        })
       
    }, [idFromButton])
    return (
        <div>
         <input type="text" value={id} onChange={e=>setId(e.target.value)} />
         <button onClick={handleChange} >Fetch Post</button>
            <ul>
                <li>
                    <h1>{post.title}</h1>
                </li>
            </ul>
        </div>
    )
}

export default FetchingApi
