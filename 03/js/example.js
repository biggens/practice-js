(function() {
    let hotel = {
        name:'Отель "Пляж"',
        roomRate: 240,
        discount: 15,
        offerPrice: function() {
            let offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }
    let hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = hotel.roomRate.toFixed(2) + '$';
    specialRate.textContent = hotel.offerPrice() + '$';

    let expiryMsg;
    let today;
    let elEnds;

    function offerExpires(today) {
        let weekFromToday, day, date, month, year, dayNames, monthNames;
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        dayNames = ['Понедельник', 'Вторник', 'Среду', 'Четверг', 'Пятницу', 'Cубботу', 'Воскресенье'];
        monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        expiryMsg = 'Акция завершается в ';
        expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year +')';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);

}())
