let firstItem = document.getElementById('one');
let itemContent = firstItem.innerHTML;

firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';