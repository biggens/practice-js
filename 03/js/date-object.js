let today = new Date();
let year = today.getFullYear();
let est = new Date('Apr 16, 1996 15:45:55');
let difference = today.getTime() - est.getTime();
difference = (difference / 31556900000)

// let el=document.getElementById('footer');
// el.innerHTML = '<p>Собственность &copy;' + year + '</p>';

let elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + 'лет мы предоставляем вам услуги авиаперелетов'