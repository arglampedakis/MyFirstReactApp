import React, { useState, useEffect } from 'react';
import Post from './Post';
// Arrow Syntax
// const Blog = ( props )=> {....}
// const Message = ()=> <div>Message</div>

export default function Blog() {

    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [posts, setPosts] = useState([]);
    const [hasError, setHasError] = useState(false);

    //way 1
    // useEffect(() => {
    //     setFilteredPosts(posts);
    // }, [posts]);
    
    useEffect(function () {
        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                setPosts(data); // <-- Async
                setFilteredPosts(data); // way 2
                // return 0;
            })
            // .then(val => {
            //     console.log("val: ", val)
            // })
            .catch(error => {
                console.log(error.message);
                setHasError(true);
            });
        // console.log(1);

    }, []); // If no [...] , runs on every side effect. With [], runs only once, upon initialization.

    function slicePosts() {
        setPosts(posts.slice(10));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form.elements.secret.value, form.elements.keyword.value);
        const keyword = form.elements.keyword.value.toLowerCase();
        console.log(keyword);
        const updatedPosts = posts.filter((post) => {
            return post.title.toLowerCase().indexOf(keyword) > -1;
        });
        console.log(updatedPosts);
        setFilteredPosts(updatedPosts);


    }
    return (
        <>
            <h1 className="border rounded-pill display-4 bg-secondary text-center text-white col-4">Blog</h1>

            <form onSubmit={handleSubmit} className="p-3 border border-danger shadow mb-4">
                <input type="text" name="keyword" placeholder="Search term" />
                <input type="hidden" name="secret" value="1234" />
                <button>Search</button>
            </form>



            <span className="btn-info p-1 m-1 rounded"><i>Length: {filteredPosts.length}</i></span>
            <button className="btn btn-danger mb-1" onClick={slicePosts}>Slice Posts</button>
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
                filteredPosts.map((post) => {
                    return (
                        <Post key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} ></Post>
                    )
                })
            }
        </>
    );
}