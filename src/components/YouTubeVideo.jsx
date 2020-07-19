import React from 'react';

function YouTubeVideo(props){

    const src = "https://www.youtube.com/embed/" + props.src ;
return(
    <div style={{border: "1px solid"}}>
        <h5><i>{props.title}</i></h5>
    <iframe width="260" height="155" src={src}></iframe>
<p>Views: {props.views}</p>
    </div>
);
}

export default YouTubeVideo;