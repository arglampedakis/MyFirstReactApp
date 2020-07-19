import React from 'react';


function Progress(props) {
    
    let r = props.r;
    if(!r){r = 90;}
    let val = props.value;
    let c = Math.PI * (r * 2);
    if (val < 0) { val = 0; }
    if (val > 100) { val = 100; }
    let pct = ((100 - val) / 100) * c;

    return (
        <div id="cont" data-pct={props.value}>
            <svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle r={props.r} cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset={pct}></circle>
                <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
            </svg>
        </div>
    );
}

export default Progress;

// <!-- INSTRUCTIONS: -->
// <div style="text-align:center;">
//   <p>What you will be building in React:</p>
//   <pre><code>
// &lt;Progress value="10" /&gt;
// &lt;Progress value="20" /&gt;
// &lt;Progress value="50" /&gt;
//   </code></pre>
// </div>