const score1 = 90;
const score2 = 95;
const highScore1 = 75;
const highScore2 = 95;

const comparison = (score1 + score2) > (highScore1 + highScore2);

const el=document.getElementById('answer');
el.textContent = 'Новый рекорд: ' + comparison;