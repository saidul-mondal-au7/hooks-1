import React, { useState, useEffect } from 'react'
import axios from 'axios';
function FetchingApi() {
    const [post, setPost] = useState({})
    const [id, setId ] = useState(1)

    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(res => 
        {
            console.log(res)
            setPost(res.data)
        })
       
    }, [id])
    return (
        <div>
         <input type="text" value={id} onChange={e=>setId(e.target.value)} />
            <ul>
                <li>
                    <h1>{post.title}</h1>
                </li>
            </ul>
        </div>
    )
}

export default FetchingApi
