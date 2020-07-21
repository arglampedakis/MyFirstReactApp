import React from 'react';

function Progress(props) {
    console.log("value is: ", props.value);
    let r = 90;
    let val = parseInt(props.value);
    let c = Math.PI * (r * 2);
    if (val < 0) { val = 0; }
    if (val > 100) { val = 100; }

    let pct = ((100 - val) / 100) * c;
 console.log("pct is: ",pct);
    return (
        <div id="cont" data-pct={val}>
            <svg id="svg" width="200" height="200" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                <circle r="65" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
                <circle id="bar" r="65" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset={pct}></circle>
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