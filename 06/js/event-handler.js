function checkUserName() {
    const elMsg = document.getElementById('feedback');
    if(this.value.length < 5) {
        elMsg.textContent = 'Не допустимое количество символов, минимум 5'
    } else {
        elMsg.textContent = '';
    }
}

const elUserName = document.getElementById('username');
elUserName.onblur = checkUserName;