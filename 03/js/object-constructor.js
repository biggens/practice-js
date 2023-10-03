const hotel = new Object();

hotel.name = 'Tula';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
}
let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms');
elRooms.innerHTML = hotel.checkAvailability();

console.log(hotel)