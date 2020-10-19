"use strict"
//внутренний формат для строк - utf-16
//всегда независимо от кодировки страницы

//вывести символы в юникоде
console.log("\u00a9")
console.log("str".length)
//скобки современный способ charAt - исторический
//но есть разница первое вернет undefined для
//недействительной позиции символа второй пустую строку
console.log("str"[0],"str".charAt(2))
//пебрать строку можно так
for (let char of "Hello") {
    console.log(char);
}
let list = ["Hello","f"]
for (let num of list) {
    console.log(num);
}
//**TODO строки в js неизменямы

//к строке можно применять методы
//toLowerCase() и toUpperCase()

//для поиска подстроки можно использовать .indexOf

let str = 'Widget with id';
//вернет -1 если не найдет
//вернет позицю начала подстроки
console.log(str.indexOf('Widget'))
//для поиска с конца строки
//str.lastIndexOf(substr, position)

let str2 = 'Ослик Иа-Иа посмотрел на виадук';

let target = 'Иа'; // цель поиска

let pos = 0;
while (true) {
    let foundPos = str2.indexOf(target, pos);
    if (foundPos == -1) break;
    console.log( `Найдено тут: ${foundPos}` );
    pos = foundPos + 1 ; // продолжаем со следующей позиции
                         //target.length для обычных случаев можно
                         //прибавлять такое значение
}

// для indexOf можно сделать такую проверку
//~ (not) возвращает -(x+1)
//т.е. отрицательное число представляется в
//дополнительном коде
console.log( ~2 ); // -3, то же, что -(2+1)
console.log( ~1 ); // -2, то же, что -(1+1)
console.log( ~0 ); // -1, то же, что -(0+1)
console.log( ~-1 ); // 0, то же, что -(-1+1)
console.log( ~-3 ); // 0, то же, что -(-1+1)
console.log( ~52 ); // 0, то же, что -(-1+1)

//indexOf будет выглядеть компактнее
//но такая проверка считается устаревшей
//т.к. проверяет только до 32 степени
//а дальше выдает нули
if (~str.indexOf("W")){
   console.log("Совпадение есть")
}

//методы includes
console.log("INCLUDES")
console.log( "Widget with id".includes("Widget"))
console.log("Hello".includes("Bye"))
console.log("Midget".includes("id"))
console.log("Midget".includes("id", 3))
console.log("Widget".startsWith("Wid"))//prefix
console.log("Widget".endsWith("get"))  //suffix
//получение подстроки
let str3 = "stringify"
console.log(str3.slice(0,5))
console.log(str3.slice(1,3))
console.log(str3.slice(1))
//из особенностей можно вделить использование
//отрицательных индексов, они значат то,
//что отсчет будет вестись с конца строки
//т.е. -1 это предпоследний символ
console.log(str3.slice(-4, -1))

//str.substring(start [, end])
//тоже что и slice но можно задавать
//start > чем end
//slice вернет пустую строку
console.log(str.substring(6, 2))
console.log(str.substring(2, 6))
console.log(str.substring(-2, -6))


//str.substr(start [, length])
//позволяет указать длину подстроки
//с позиции а не конечную позицию

console.log(str.substr(2, 4))



// slice(start, end)
// от start до end (не включая end)
// можно передавать отрицательные значения

// substring(start, end)
// между start и end
// отрицательные значения равнозначны 0

// substr(start, length) 	length символов,
//     начиная от start
// значение start может быть отрицательным

//чтобы правильно сравнивать строки нужно использовать
//localeCompare

// Отрицательное число, если str меньше str2.
//     Положительное число, если str больше str2.
// 0, если строки равны.

console.log('Österreich'.localeCompare('Zealand'))

//суррогатные пары
//запись символов двумя 16бтными словами
console.log('😂','😂'.length )
console.log('😂'[0],'😂'[1] )
console.log('😂','😂'.length )
//по стандарту
//  если код символа находится в диапазоне 0xd800..0xdbff,
//  то это — первая часть суррогатной пары.
// вторая часть — имеет код в диапазоне 0xdc00..0xdfff
console.log('😂'.charCodeAt(0))

//нормализация
//можно получить два одинаковых по виду знака
//но разных по кодам
// s1 == s2//false
let s1 = 'S\u0307\u0323'; // Ṩ, S + точка сверху + точка снизу
let s2 = 'S\u0323\u0307'; // Ṩ, S + точка снизу + точка сверху
//чтобы избежать этого нужна нормализация

console.log(s1===s2)
console.log(s1.normalize()===s2.normalize(),s1.normalize())
//полезные ссылки для работы со строками
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String


//task 1
// Напишите функцию ucFirst(str), возвращающую
// строку str с заглавным первым символом. Например:

function ucFirst(str){
    //можно сделат условие так !str
    if (str.length < 0) {
        return str
    }
    return str[0].toUpperCase()+str.slice(1)
}
console.log(ucFirst("вася"))

//task 2
// Напишите функцию checkSpam(str),
//     возвращающую true, если str
// содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

function checkSpam(str){
    let strCheck = str.toUpperCase()
    let spamList = ['VIAGRA','xxxxx']
    for (let word of spamList){
        if (strCheck.includes(word.toUpperCase())){
            return true
        }
    }
    return false
}
console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))
/*
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
 */

/*
Создайте функцию truncate(str, maxlength),
 которая проверяет длину строки str
и, если она превосходит maxlength, заменяет
 конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка,
если усечение не требуется, либо, если необходимо,
усечённая строка.
 */

function truncate(str,maxLen){
    if (maxLen < str.length){
        return str.slice(0,maxLen-1)+"..."
    }
    return str
}

console.log(truncate("Всем привет!", 20))
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))








