const element = document.querySelector('li.hot');
element.className = 'cool';

const els = document.querySelectorAll('li.hot');
let el = els[1];
el.className = 'cool'