let msg = '<div class=\"header\"><a id=\"close\" href="#">закрытьX</a></div>';
msg +='<div><h2>Техническое обслуживание</h2>';
msg +='C 12 до 13 часов не сервере производится техническое обслуживание. ';
msg +='Во время обслуживания могут происходить незначительные сбои в работе сайта.</div>';


let elNote = document.createElement('div');
elNote.setAttribute('id','note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);


function dismissNote() {
    document.body.removeChild(elNote);
}

let elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);