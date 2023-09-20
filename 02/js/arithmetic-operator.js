let subtotal = (13 + 1) * 5;

let shipping = 0.5 * (13 + 1);

let total = subtotal + shipping;

let elSub = document.getElementById('subtotal')
elSub.textContent = subtotal;

let elShip = document.getElementById('shipping');
elShip.innerHTML = shipping;

let elTotal = document.getElementById('total')
elTotal.textContent = total;