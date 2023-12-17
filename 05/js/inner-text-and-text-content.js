let firstItem = document.getElementById('one');
let showTextContent = firstItem.textContent;
let showInnerText = firstItem.innerText;

let msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>InnerText: ' + showInnerText + '</p>';
let el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'пшеничные сухарики';