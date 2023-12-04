let pass = 50;
let score = 75;
let msg;

if(score >= pass) {
    msg = 'Поздравляем, пройдено!';
} else {
    msg = 'Повторите попытку';
}

let el = document.getElementById('answer');
el.textContent = msg;