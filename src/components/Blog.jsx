import React, { useState, useEffect } from 'react';
import Post from './Post';
// Arrow Syntax
// const Blog = ( props )=> {....}
// const Message = ()=> <div>Message</div>

export default function Blog() {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const [posts, setPosts] = useState([]);
    const [hasError, setHasError] = useState(false);
    useEffect(function () {
        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setPosts(data); // <-- Async
                return 0;
            })
            .then(val => {
                console.log("val: ", val)
            })
            .catch(error => {
                console.log(error.message);
                setHasError(true);
            });
        console.log(1);

    }, []);
    return (
        <>
            <h1 className="border rounded-pill display-4 bg-secondary text-center text-white col-4">Blog</h1>
            {
                hasError ?
                    <div className="bg-danger text-white">Error occurred!</div>
                    :
                    null
            }
            {
                <div hidden className="bg-success">No errors!</div>
            }
            {
                posts.map((post) => {
                    return (
                        <Post key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} ></Post>
                    )
                })
            }
        </>
    );
}