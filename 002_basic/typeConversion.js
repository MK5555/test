//для сравнения используется unicode а не реальный алфавит
//для строго сравнения используется ===
let value = true;
console.log(typeof value)
//так можно преобразовать в строку
value = String(value)
console.log(typeof value)
//авто преобразование к числам
//если преобразование будет
//неудачным то вернется NaN
console.log(( "6" / "2" ))
let str = "123";
console.log(typeof str); // string
let num = Number(str); // становится числом 123
console.log(typeof num); // number

//undefined преобразуется в NAN
// null в 0

//преобразование в boolean
//0 - пустая строка, null, undefined, NaN
//1 - все остальное т.е. строка с нулем это true

/*
НА ЗАМЕТКУ
undefined при численном преобразовании становится NaN, не 0.

"0" и строки из одних пробелов типа " " при логическом
 преобразовании всегда true.
 */