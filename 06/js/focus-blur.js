function checkUsername() {
    let username = el.value;
    if(username.length < 5) {
        elMsg.className = 'warning';
        elMsg.textContent = 'Имя слишком короткое...';
    } else {
        elMsg.textContent = '';
    }
}
function tipUsername() {
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Имя пользователя должно содержать не менее 5 символов';
}


let el = document.getElementById('username');
let elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);