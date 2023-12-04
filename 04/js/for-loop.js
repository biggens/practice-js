let scores = [24, 32, 17];
let arrayLength = scores.length;
let roundNumber = 0;
let msg = '';
let i;

for (i = 0; i < arrayLength; i++) {

    // Массивы имеют основание 0 (поэтому этап 0 идет первым)
    // Прибавляем 1 к текущему этапу
    roundNumber = (i + 1);
  
    // Записываем текущий этап в сообщение
    msg += 'Этап ' + roundNumber + ': ';
  
    // Получаем баллы из массива баллов
    msg += scores[i] + '<br />';
  }




document.getElementById('answer').innerHTML = msg;