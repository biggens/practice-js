function getTarget(e) {
    if(!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e) {
    let target, elParent, elGrandparent;
    target = getTarget(e);
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    elGrandparent.removeChild(elParent);
}


let el = document.getElementById('shoppingList');
if(el.addEventListener) {
    el.addEventListener('click', function(e){
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onclick', function(e){
        itemDone(e);
    });
}