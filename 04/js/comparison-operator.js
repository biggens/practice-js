const pass = 50;
const score = 90;

let hasPassed = score >= pass;

let el = document.getElementById('answer');
el.innerHTML = 'Прохождение уровня: ' + hasPassed;