import React, { useState , useEffect } from 'react';

//useState();

export default function YouTube(props) {
        //likes STATE VARIABLE GETTER
    // NEVER!! likes= 1 or likes++
    // setLikes() STATE VARIABLE SETTER
    // ONLY: setLikes( 1 );
    const [likes, setLikes] = useState(props.likes); //likes = 0
    
    useEffect(function(){
        console.log("YT--useEffect():: callback");
        // fetch( SEND LIKES TO SERVER ); //like $.ajax() in Jquery
        
    }, 
    [ likes ]);

    const [dislikes, setDislikes] = useState("Hi!"); //dislikes = 0
    function handleLikeClick() {
        console.log("Like Clicked!");
        setLikes(parseInt(likes) + 1);
    }

    function handleDislikeClick() {
        console.log("Dislike Clicked!");
        setDislikes(dislikes + "!");
    }

    return (
        <>
            <h4> <i>{props.title}</i> </h4>
            <iframe
                title={props.title}
                width="260"
                height="155"
                src={"https://www.youtube.com/embed/" + props.src}
                allowFullScreen></iframe>
            <p><i>Views: {props.views}</i> <button onClick={handleLikeClick}>Like</button> <b>{likes}</b> || 
             <button onClick={handleDislikeClick}>DisLike</button> <b>{dislikes}</b></p>
        </>
    );

}