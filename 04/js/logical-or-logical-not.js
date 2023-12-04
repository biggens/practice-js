const score1 = 8;
const score2 = 8;
const pass1 = 6;
const pass2 = 6;

const minPass = ((score1 >= pass1)) || ((score2 >= pass2));

const msg = 'Требуется ли пересдача: ' + !minPass;

let el = document.getElementById('answer');
el.textContent = msg;