const score1 = 8;
const score2 = 8;
const pass1 = 6;
const pass2 = 6;

let passBoth = (score1 >= pass1) && (score2 >= pass2);

let msg = 'Оба этапа пройдены: ' + passBoth;

let el = document.getElementById('answer');
el.textContent = msg;