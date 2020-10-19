"use strict";

let arr = ["I","go","home"]
//удалить элемент из массива
//можно сделать так но не нужно
//т.к.удаляется значение с данным ключом
delete arr[1] //еще и длина не изменится
console.log(arr,arr.length)
//правильный способ удаления
//начиная с первой позици удалить один элемент
arr.splice(1,1)
console.log(arr,arr.length)
//с помощью. этого метода можно
//вставлять изменять элементы
//технически удалит и заменит
let removed = arr.splice(0,2,"Js","c++")
console.log(arr,arr.length)
arr.splice(3,0,"go","haskell")
console.log(arr,arr.length)
//отрицательные индексы также разрешены
arr.splice(arr.length,0,"ruby","python","yaml")
console.log(arr,arr.length)

///метод slice
//позволяет получить копию массива или его части
//arr.slice([start], [end])
//с первого по третий элементы
//получить [) - получает такой интервал
console.log(arr.slice(1,3))
//а так будет получена вся копия
//может пригодиться когда не нужно
//с массивом работать напрямую
console.log(arr.slice())

//contact
//аргументами мб как массивы так и отдельные
//элементы
let arr_contact = ["1","2"]
console.log(arr_contact.concat(arr,"some mean"))
//такой объект добавиться просто как объект
let arrayLike = {
    0: "что-то",
    1: "еще",
    [Symbol.isConcatSpreadable]: true, //спец флаг
    length: 2
};
//но если установить спец флаг то он обработается как массив
console.log(arr_contact.concat(arrayLike))

arr.forEach(function(item,index,array){
    console.log(item,index)
})

//у массивов есть методы indexOf/lastIndexOf и includes
/*

    arr.indexOf(item, from) ищет item, начиная с
     индекса from, и возвращает индекс, на котором
      был найден искомый элемент, в противном случае -1.

    arr.lastIndexOf(item, from) – то же самое, но
     ищет справа налево.
    arr.includes(item, from) – ищет item, начиная с
    индекса from, и возвращает true, если поиск успешен.

 */

let arr1 = [1, 0, false];

//здесь используется строгое сравнение
//т.е. метод найдет именно false а не 0
console.log( arr1.indexOf(0) ); // 1
console.log( arr1.indexOf(false) ); // 2
console.log( arr1.indexOf(null) ); // -1
console.log( arr1.includes(1) ); // true
//includes также может правильно обработать NaN
const arr2 = [NaN];
console.log( arr2.indexOf(NaN) ); // -1 (должен быть 0, но === проверка на равенство не работает для NaN)
console.log(arr2.includes(NaN) );// true (верно)

//метод find
//Если функция возвращает true, поиск прерывается и возвращается item.
// Если ничего не найдено, возвращается undefined.
// Метод arr.findIndex – по сути,
// то же самое, но возвращает индекс,
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

//функция будет работать и в случае если будет
//передан один элемент
//если передать 4 получим undefined
function test_find(item,index,array){
    return item.id == 2
}

//расшифровка функции
//передается элемент item и возвращается true/false
//причем объект вернется в случае если будт true
//в ином случае будет undefined
let user = users.find(item => item.id == 1);
let user1 = users.find(test_find);
let user2 = users.find(item => item.id <3);
console.log(user,user1,user2)

//find подходит когда мы ищем один элемент
//и он вернет первый попавшийся
//на случай, если нужно вернуть несколько элементов
// используется filter

let some_users = users.filter(item => item.id < 3)
console.log(some_users)

//map возвращает массив результатов
//т.е. проводится ряд операций над
//массивом и для каждого элемента
//возвращается результат

let result = users.map((item,
                        index)=>item.name+" "+index)
console.log(result)

//sort
let s = [2,1,15,3]
//по умолчанию будут сортироваться
//как строки поэтому нужно писать свой
//компаратор для чисел и прочего
console.log(s.sort()) //сравнит неправильно относительно чисел
console.log(s.sort(function (a,b){
    if (a>b) return 1;
    if (a===b) return 0;
    if (a<b) return -1;
}))
//на самом деле достаточно выдать
// положительное или отрицательное
// число, что позволяет писать более короткие функции
console.log([5,1,2,6,2].sort(
    (a,b) => a - b))

//reverse split join
let names = 'Вася, Петя, Маша';
//сплит может разделить при необходимости
//ограниченное число элементов которое
//указывается вторым аргументом
let split_names = names.split(', ');
console.log(names)
console.log(split_names)
console.log(split_names.reverse())
console.log(split_names.join("!"))

//arr.reduce и arr.reduceRight  используются
//второй проходит справа налево
// для вычисления  значения на основе всего массива.
let arr_sum = [1, 2, 3, 4, 5];
//let value = arr.reduce(
// function(previousValue, item, index, array){},initial)
let result_sum = arr_sum.reduce((sum, current) => sum + current, 0);
console.log(result_sum)

/*
typeOf не может отличить обычный объект
от массива поэтому есть специальный метод
для этого isArray
 */

console.log(Array.isArray(arr))
console.log(Array.isArray({1:1,2:2}))

//у большинства функций есть параметр thisArg
//который становится this для func
//ну вроде как очень редко используется
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users_army = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

let soldiers = users_army.filter(army.canJoin, army);
//более предпочтительным вариантом является
let soldiers1 = users_army.filter(user => army.canJoin(user));
console.log(soldiers)
console.log(soldiers1)

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
/*
Обратите внимание, что методы sort, reverse и splice
 изменяют исходный массив.

    Для добавления/удаления элементов:
        push (...items) – добавляет элементы в конец,
        pop() – извлекает элемент с конца,
        shift() – извлекает элемент с начала,
        unshift(...items) – добавляет элементы в начало.
        splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
        slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
        concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.

    Для поиска среди элементов:
        indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
        includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.

        TODO find/filter(func) – фильтрует элементы через функцию и
         -отдаёт первое/все значения, при прохождении которых
         -через функцию возвращается true.

        findIndex похож на find, но возвращает индекс вместо значения.

    Для перебора элементов:
        forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.

    Для преобразования массива:
        map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
        sort(func) – сортирует массив «на месте», а потом возвращает его.
        reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
        split/join – преобразует строку в массив и обратно.
        reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

    Дополнительно:
        Array.isArray(arr) проверяет, является ли arr массивом.

 */

//task1
//Переведите текст вида border-left-width в borderLeftWidth
function ucFirst(str){
    //можно сделат условие так !str
    if (str.length < 1) {
        return ""
    }
    return str[0].toUpperCase()+str.slice(1)
}
function camelize(str){
    let splited_str = str.split("-")
    let camelArray = splited_str.map(item=>ucFirst(item))
    return camelArray.join('')
}
//можно делать так
function camel2(str){
    return str.split("-").map(
        item=>ucFirst(item)
    ).join("")
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camel2("-webkit-transition-"))

//task2
/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём
 элементы между a и b и отдаёт массив этих элементов.
 */

function filterRange(arr,min,max){

    return arr.filter(item => (item >= min && item <= max) )
}


let arr_task2 = [5, 3, 8, 1];

let filtered = filterRange(arr_task2, 1, 4);
console.log(filtered)
console.log(arr_task2)

// task3
let arr_task3 = [0, 1, 2, 3, 4, 15, 63];
function filterRangeInPlace(arr,min,max){

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        console.log(val,(val <= min) || (val >= max))
        if ((val < min) || (val > max)) {
            arr.splice(i, 1);
            i--;
        }
    }

}
filterRangeInPlace(arr_task3,1,4)
console.log("task 3",arr_task3)

//Сортировать в порядке по убыванию
//и вернуть копию
let arr_4 = [5, 2, 1, -10, 8];
function copySorted(a){
    //используется именно slice
    //чтобы не возвращать
    //оригинал
    let copy_a = a.slice(0)
    return copy_a.sort((a,b)=>{
        if (a < b)return 1
        if (a == b)return 0
        if (a > b)return -1
    })

}
let a = copySorted(arr_4)

console.log(arr_4)
console.log(a)

//Создайте функцию конструктор Calculator,
// которая создаёт «расширяемые» объекты калькулятора.

function Calculator(){
    this.Methods = {
        "+":function (a,b){
            return +a + +b
        },
        "-":function (a,b){
            return +a - +b
        }}
    this.determeParameters = function (expr){
        return expr.split(" ")
    }
    this.addMethod = function (symb,calcFunc){
        this.Methods[symb]=calcFunc
    }
    //добавить проверку на ошибки
    //isNumber typeof
    //is legalMethod
    this.calculation = function (expr){
       let parametrs = this.determeParameters(expr)
        let res = this.Methods[parametrs[1]](parametrs[0],parametrs[2])
        console.log(res)
    }
}

let calc = new Calculator
calc.addMethod("*",(a,b)=>a*b)
calc.addMethod("**",(a,b)=>a**b)
calc.addMethod("/",(a,b)=>a/b)
calc.calculation("1 + 3")
calc.calculation("-1 - -3")
calc.calculation("1 + 3")
calc.calculation("13 * 3")
calc.calculation("10 ** 3")
calc.calculation("13 / 3")

//Трансформировать в массив имён
function transform(usr){
  return usr.map(item => item.name)

}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };


let users5 = [ vasya, petya, masha ];

let names11 = transform(users5)
console.log(names11)

//Трансформировать в объекты

let vasya1= { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users6 = [ vasya1, petya1, masha1 ];

console.log(users6.map(item => ({
    fullName:item.name+" "+item.surname,
    id:item.id} )))

//task 7
{
    function sortByAge(arr){
        return arr.sort(function (a,b){
            if (a.age < b.age) return 1
            if (a.age == b.age) return 0
            if (a.age > b.age) return -1
        })
    }

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [ vasya, petya, masha ];
    sortByAge(arr);
    console.log(arr.reverse())
}

//shuffle
{
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    function shuffle(arr) {
        let len = arr.length
       let new_arr = []
        for (let i = 0;i < len ;i++){
            let j = randomInteger(0,arr.length-1)
            new_arr.push(arr[j])
            arr.splice(j,1)
        }
        return new_arr
    }

    let arr = [1, 2];

    console.log(shuffle(arr))

    let count= {}

    for (let i = 0; i < 102; i++) {
        let array = [1, 2, 3];
        arr = shuffle(array)
        if (isNaN(count[arr.join('')])){
            count[arr.join('')] = 1
        }
        count[arr.join('')]++
    }
    for (let key in count) {
        console.log(key,count[key])
    }


}

{
    function unique(arr2) {
        let uniq = {}
        let result = []
        for (let i = 0; i < arr2.length; i++) {
            if (uniq[arr2[i]] === undefined) {
                uniq[arr2[i]] = 0
                result.push(arr2[i])
                console.log("+")
            }
        }

        return result
    }

    let strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "кришна", ":-O"
    ];

    console.log(strings)

    console.log(unique(strings))
}






