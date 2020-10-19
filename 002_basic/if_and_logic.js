

//пример использования if else
// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
//
//
// if (year > 2015){
//     console.log("Поздно")
//
// }else if (year<2015) {
//     console.log("рано")
// } else {
//     console.log("норм")
// }

// такие конструкции обычно можно заменить на
// let accessAllowed = age > 18;
// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }

console.log(19>18)
let a = 2 + 2;

//выполняется в зависимости от типа
//тут важно использовать break;
switch (a) {
    case 3:
        console.log('Маловато');
        break;
    case 4:
        console.log('В точку!');
        break;
    case 5:
        console.log('Перебор');
        break;
    default:
        console.log("Нет таких значений");
}

/*
В JavaScript есть три логических оператора:
 || (ИЛИ), && (И) и ! (НЕ).
 */

//задача
//что выведется?
//alert( alert(1) || 2 || alert(3) );
// сначала 1 а затем 2, далее вычисления
// не будут производиться

//task

let browser = 'Chrome1'

if (browser === 'Edge'){
    console.log('Edge');
} else if (browser==='Chrome') {
    console.log('Chrome');
} else {
    console.log('We hope that this page looks ok!');
}

const number = 1

switch (number){
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break; // нужен просто по правилам хорошего тона
}












