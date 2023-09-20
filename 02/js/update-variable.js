let inStock;
let shipping;

inStock = true;
shipping = false;

/* Если здесь будет происходить еще какая - либо обработка,
сценарию может потребоваться изменить эти значения. */

inStock = false;
shipping = true;

let elStock = document.getElementById('stock');
elStock.className = inStock;

let elShip = document.getElementById('shipping');
elShip.className = shipping;