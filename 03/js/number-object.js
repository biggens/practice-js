// let originalNumber = 10.23456;

// let msg = '<h2>исходное число</h2><p>' + originalNumber + '</p>';
// msg += '<h2>3 десят.разряда</h2><p>' + originalNumber.toFixed(3) + '</p>';
// msg += '<h2>3 цифры</h2><p>' + originalNumber.toPrecision(3) + '</p>';

// let el = document.getElementById('info');
// el.innerHTML = msg;

let randomNum = Math.floor((Math.random() * 10) + 1);

let el = document.getElementById('info');
el.innerHTML = '<h2>случайное число</h2><p>' + randomNum + '</p>';