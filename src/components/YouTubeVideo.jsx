import React from 'react';

function YouTubeVideo(video) {

    const src = "https://www.youtube.com/embed/" + video.src;
    return (
        <div style={{ border: "1px solid" }}>
            <h5><i>{video.title}</i></h5>
            <iframe title={video.title} width="260" height="155" src={src} allowFullScreen></iframe>
            <p>Views: {video.views}</p>
        </div>
    );
}

export default YouTubeVideo;