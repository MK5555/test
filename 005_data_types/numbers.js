"use strict";
//есть разные способы
//для записи чисел
let billion  = 1_000_000_000
//e используется для укорочения записи
let billion2 = 1.2e9
let ms = 0.0000001
let ms1 = 1e-6
console.log(billion,billion2)
console.log(ms,ms1)
//разные формы записи
//для чисел
//16
console.log(0xff)
//2
console.log(0b111111)
//8
console.log(0o377)

//метод toString(base)
let test = 83
//возвращает строку в по основанию
//radix - основание
console.log(test.toString(2))
console.log(test.toString(8))
console.log(test.toString(16))
//если надо вызвать от числа, то ставится
//две точки т.к. первую точку js принимает
//за место где начинается десятичная часть
console.log(123..toString(16))

//для округления используются 4 функции
//работает и с отрицательными числами
//только важно учитыват, что с ними
//логика такя что большим считается
//меньшенее по модулю

//округлить в меньшую сторону
console.log(Math.floor(3.2))
console.log(Math.floor(3.7))
//округлить в большую сторону
console.log(Math.ceil(3.2))
console.log(Math.ceil(3.7))
//округлить до ближашего целого
console.log(Math.round(3.1))
console.log(Math.round(3.7))
//удалить дробную часть без округления
//отличается от floor тем что по
//другому работает для отрицательных чисел
console.log(Math.trunc(3.1))
console.log(Math.trunc(3.7))
//округлить число до n знаков можно с помощью
//при необходимости этой функцией
//могут быть добавлены нули в конец
console.log(2.3323526.toFixed(2))

//при работе с дробными числами стоит
//помнить, что числа стоит округлять
//например при помощи toFixed

// т.к. могут возникать проблемы с
//точностью из-за double формата

//эти методы возвращают число от
//css строк например
//если произойдет ошибка чтения
//то вернется пропаршенное число до ошибки
//можно задать основание для парсинга
console.log(parseInt("100px"))
console.log(parseFloat("1.200em"))
console.log(parseInt("0xff",16))
//сгенерировать случайное числло от 0 до 1
console.log(Math.random())
//max/min функции
console.log(Math.max(3, 5, -10, 0, 1))

//random integer

function ran(){
    let res = Math.random()*10
    res = 1+ Math.trunc(res) % 5
    return res
}

function ran2(max,min){
    let rand = min - 0.5 + Math.random()*(max-min + 1)
    return Math.round(rand)
}

console.log(ran())
console.log(ran())
console.log(ran())
console.log(ran())
console.log(ran2(1,5))
console.log(ran2(1,5))
console.log(ran2(1,5))








