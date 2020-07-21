import React, { useState, useEffect } from 'react';
import YouTube from './YouTube';

let data = [
    {
        "src": "kZTKuMBJP7Y",
        "title": "How Not to Be Wrong: The Power of Mathematical Thinking - with Jordan Ellenberg",
        "views": "404,855",
        "likes": "32"
    },
    {
        "src": "q7v5NtV8v6I",
        "title": "Why Everything You Thought You Knew About Quantum Physics is Different - with Philip Ball",
        "views": "664,316",
        "likes": "45"

    },
    {
        "src": "8FHBh_OmdsM",
        "title": "Artificial Intelligence, the History and Future - with Chris Bishop",
        "views": "269,102",
        "likes": "112"

    }
];

const URL = "https://api.jsonbin.io/b/5f15e3bac58dc34bf5d73e4e";


// <Youtemy />
export default function Youdemy() {
    function loop(videoInfo) {
        return <YouTube
            key={videoInfo.src}
            videoInfo={videoInfo} //passing all the info altogether instead one by one

            title={videoInfo.title}
            src={videoInfo.src}
            views={videoInfo.views}
            likes={videoInfo.likes}
        />
    }
const [videos, setVideos] = useState([]);
    useEffect(function(){
        console.log("useEffect():: callback");
        fetch( URL )//get URl and send Get request
        .then(function( response ){//once fetch is completed, run this function
            return response.json();
        }).then(function(data){//result of response.json()
            console.log( data );
            setVideos(data);
        })
    }, []);
    return (
        <>
            <h1>Youdemy</h1>
            <h2>Tech Videos by YouTube</h2>
            {
                data.map(loop)
            }
        </>
    );

}

