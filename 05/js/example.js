let list = document.getElementsByTagName('ul')[0];

let newItemLast = document.createElement('li');
let newTextLast = document.createTextNode('деревенская сметана');

newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

let newItemFirst = document.createElement('li');
let newTextFirst = document.createTextNode('белокачанная капуста');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

let listItems = document.querySelectorAll('li');

let i;
for(i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

let heading = document.querySelector('h2');
let headingText = heading.firstChild.nodeValue;
let totalItems = listItems.length;
let newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;