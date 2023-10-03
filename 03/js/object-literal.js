const hotel = {
    name: 'Tula',
    rooms: 40,
    booked: 25,
    checkAvailabitlity: function() {
        return this.rooms - this.booked;
    }
}

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailabitlity();