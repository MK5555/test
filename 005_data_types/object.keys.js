"use strict";

//мет`о`ды keys, values, entries
/*
поддерживаются для Map Set Array
простые обекты тоже можно перебирать
но синтаксис отличается


Object.keys(obj) – возвращает массив ключей.
Object.values(obj) – возвращает массив значений.
Object.entries(obj) – возвращает массив пар [ключ, значение].

отличие от map

Map Синтаксис вызова map.keys() Возвращает перебираемый объект
Object Синтаксис вызова  	Object.keys(obj), не obj.keys()
Возвращает  	«реальный» массив

если нуджно вернуть символьные ключи то используется
Object.getOwnPropertySymbols
если нужны все ключи
Также, существует метод Reflect.ownKeys(obj),
 */
{
    let prices = {
        banana: 1,
        orange: 2,
        meat: 4,
    };
    let doublePrices = Object.fromEntries(
        Object.entries(prices).map(([key,value])=>[key,value*2])
    )
    console.log(doublePrices)

}
{
    function salarySum(arr){
        let sum = 0
        for (let a of Object.values(arr)){
            sum += a.valueOf()
        }
return sum
    }
    let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
    console.log(Object.values(salaries))
    console.log(salarySum(salaries))

}

{
function count(usr){
    return Object.keys(usr).length
}
    let usr = {
        name: 'John',
        age: 30
    };
    console.log(count(usr))
}













