import React from 'react'; //JSX 
import ReactDOM from 'react-dom';
// import Header from './header.js';

// <Post></Post>
const smthing = 1;
function Post() {
  console.log(smthing);
    return (
    <div>
      {/* <Header /> */}
      <h1>APP!</h1>
      <h2>Subtitle</h2>
      <OpenLayers/>
      <OpenLayers></OpenLayers>
    </div>
  );
}

// <OpenLayers /> or <OpenLayers></OpenLayers>
function OpenLayers() {
  return <div>OpenLayers <strong>rocks!</strong></div>;
}

// ReactDOM.render(WHAT, WHERE);
const root = document.getElementById("root"); //WHERE
ReactDOM.render(<Post></Post>, root);

