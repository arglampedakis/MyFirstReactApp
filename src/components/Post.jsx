import React from 'react';

function Secret() { } //Never exported, never imported

function Post(props) {
    console.log(props)
    const styles = {
        color: props.color
    }

    function ran() {
        if (Math.random() > 0.5) {
            return "Bigger than 0.5";
        } else {
            return "Lower than 0.5";
        }
    }
    return (
        <div style={{border: "1px solid"}}>
            {ran()}
            <h2 style={styles}>{props.title}</h2>
            <p> {props.children}</p>
        </div>
    );
}

export default Post;