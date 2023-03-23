import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';

const Details = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);


    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(data => setComments(data));
  }, [id]);
    return (
        <div>
            <Navbar />
            <div className='m-4 p-4 rounded-md shadow-md bg-gray-50'>
                
                <div className='flex'>
                    <div>
                        <h1 className='text-3xl font-semibold flex justify-center'>{post.title}</h1>
                        <div className='text-lg py-4'>
                            <p>{post.body}</p>
                            <p>{post.body}</p>
                            <p>{post.body}</p>
                        </div>
                    </div>
                
                
                    <div className='comments my-2 py-1 flex flex-col items-center'>
                        <h1 className='text-lg font-semibold'>
                            Comments
                        </h1>
                        {comments.map(comment => (
                            <div key={comment.id} className="m-1 p-1 w-6/12 flex flex-col bg-gray-200 rounded-md">
                                <span className='italic'>"{comment.body}"</span>
                                <span className='text-sm font-semibold text-center'>By:{comment.name}, {comment.email}</span>
                            </div>
                        ))}
                        <div className=''>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details