import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Post from './components/Post.jsx';
import YouTubeVideo from './components/YouTubeVideo.jsx';
import Progress from './components/Progress.jsx';

// <Navigation></Navigation>
function Navigation() {
    const navStyle = {
        // CSS: border-bottom-color: indigo;
        borderBottomColor: Math.random() > 0.5 ? "indigo" : "orange",
        backgroundColor: "#EEEEEE",
        padding: "5px"
    };

    const menuItem3 = "Contact";
    return (
        <nav style={navStyle}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>{menuItem3.toUpperCase()}</li>
                <li>5 + 6 = {5 + 6}</li>
            </ul>
        </nav>
    );
}

const posts = [{ title: "React", color: "blue" }, { title: "JavaScript", color: "skyblue" }, { title: "PeopleCode", color: "orange" }];

let data = [
    {
        "src": "kZTKuMBJP7Y",
        "title": "How Not to Be Wrong: The Power of Mathematical Thinking - with Jordan Ellenberg",
        "views": "404,855"
    },
    {
        "src": "q7v5NtV8v6I",
        "title": "Why Everything You Thought You Knew About Quantum Physics is Different - with Philip Ball",
        "views": "664,316"

    },
    {
        "src": "8FHBh_OmdsM",
        "title": "Artificial Intelligence, the History and Future - with Chris Bishop",
        "views": "269,102"

    }
];


// <App></App>
function App() {

    return (
        <div>
            <Navigation />
            <h1>App</h1>
            <Progress value="20" r="90"></Progress>
            {
                data.map(function (video) {

                    console.log(video);
                    return (
                        <div>
                            <br />
                            <YouTubeVideo src={video.src} views={video.views} title={video.title}></YouTubeVideo>
                        </div>
                    );

                })}

            {/* <iframe width="260" height="155" src="https://www.youtube.com/embed/kZTKuMBJP7Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {
                posts.map(function (post) {
                    console.log(post);
                    return (
                        <Post title={post.title} color={post.color}></Post>
                    )
                })
            }
            <Progress></Progress>
            {/* <Post title="React" >Will <mark>change</mark> your life!</Post>
            <Post title="JavaScript" color="hotpink" >This <i>language</i> rocks.</Post>
            <Post title="PeopleCode" color="skyblue">My company.</Post> */}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));