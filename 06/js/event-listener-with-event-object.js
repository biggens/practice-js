// function checkLength(e, minLength) {
//     let el, elMsg;
//     if(!e) {
//         e = window.event;
//     }
//     el = e.target || e.srcElement;
//     elMsg = el.nextSibling;

//     if(el.value.length < minLength) {
//         elMsg.innerHTML = 'Имя пользователя должно содержать не менее';
//     } else {
//         elMsg.innerHTML ='';
//     }
// }

// let elUsername = document.getElementById('username');
// if(elUsername.addEventListener) {
//     elUsername.addEventListener('blur', function(e) {
//         checkUsername(e, 5);
//     }, false);
// } else {
//     elUsername.attachEvent('onblur', function(e) {
//         checkUsername(e, 5);
//     });
// }

function checkUsername(e, minLength) {
    let target = e.target;
}

let el = document.getElementById('username');
el.addEventListener('blur', function(e) {
    checkUsername(e, 5);
}, false);