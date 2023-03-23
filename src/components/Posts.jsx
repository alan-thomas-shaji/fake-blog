import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import Navbar from './Navbar';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    });
    
    return (
        <div className='flex flex-col justify-center'>
            <Navbar />
            <div className='flex justify-start mx-4'>
                <span className='text-3xl'>All posts</span>
            </div>
            {posts.map(post =>(
                <div className="m-2 p-2 w-9/12" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <Card title={post.title} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Posts;