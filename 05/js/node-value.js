let itemTwo = document.getElementById('two');
let elText = itemTwo.firstChild.nodeValue;

elText = elText.replace('кедровые орешки', 'белокачанная капуста');
itemTwo.firstChild.nodeValue = elText;
