import React from 'react';
import { render } from 'react-dom';
import Blog from './components/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';

const list = ['Kostas', 'maria', 'Michael'];

const newList = list.map( (name, idx) => { 
    console.log(idx);
    return name.toUpperCase();
});

// const filtered = list.filter( name => Math.random() > 0.5 ? false : true);
const filtered = list.filter( (name, i) => name.toLocaleLowerCase().indexOf("m") === 0 );
const filtered2 = list.filter( function(name, i) {
    console.log("i: ", i);
    return  name.indexOf("K") > -1
});
console.log(filtered);
console.log(filtered2);

// REDUCE list.reduce()

render( <Blog></Blog> , document.getElementById('root'));



