function checkUsername() {
    let elMsg = document.getElementById('feedback');
    let elUsername = document.getElementById('username');
    if(elUsername.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters of more';
    } else {
        elMsg.textContent = '';
    }
}