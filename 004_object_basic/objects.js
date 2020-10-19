'use strict';
//Объекты – это ассоциативные массивы
// с рядом дополнительных возможностей.
let user_new = new Object(); //обычно такое объявление не используется
let user_brackets = {}; //object literal или литеральная нотация

//свойства/поля можно сразу поместить
//в виде ключ/значение
let user = {
    name: "John",
    age: 30,
//если имя состоит из нескольких слов оно
//заключается в кавычки
    "some words":2,

};
//можно всегда добавить/изменить поле
user.f = "f"

console.log(user)
//удаляется свойтсво вот так
delete user.f
//для изменения многострочных имен
//нужно делать так
user["some words"]=4
console.log(user)

function MakeUser(name,age){
    return {
        name:name,
        //если имена поля и переменной совпадают то
        //можно просто написать имя поля
        age,
    }
}

console.log(MakeUser("f",9))

/*
Имена свойств ВСЕГДА преобразуются к строке
*/

//есть особое имя для свойств, которое будет вести себя
//некореектно
let obj = {};
obj.__proto__ = 5;
//Посетитель может указать "__proto__" в качестве ключа,
// и логика присваивания будет нарушена (как показано выше).
console.log(obj.__proto__)

// Чтобы проверить объект на наличие свойства
//нужно сравнить его с undefined
//true если свойства нет
console.log(user.no === undefined)
//также можно использовать спец оператор для этого
console.log('no' in user)   //false когда свойства нет
console.log('name' in user) //true когда свойство есть

/**********
 * важно помнить что в одном случае первая проверка даст неправильный
 * результат, если поле будет содержать undefined поэтому для проверки
 * лучше использовать in
 */

//для объекта можно применить цикл for in
for (let key in user){
    console.log(key,user[key])
}
//одна из особенностей, что целочисленные значения
//сортируются по возрастанию
//в другом случае все идет
//в поряде объявления

//пофиксить это можно добавив + например
//перед именем поля и перед перменной code
//при выводе её в консоль
let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    // ..,
    "1": "США"
};

for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
}

/*
у объектов есть особенность в том, что они копируются
по ссылке (в отличии от них переменные - по значению)
т.е. при присваиваниии объекты будут указывать на одно
и тоже место в памяти
 */

let user_ob = { name: 'John' };
let admin_ob = user_ob;
admin_ob.name = 'Pete';
console.log(user_ob.name);
//если нужно это сделать то используется такой способ
let obj_t = {
    name:"a",
    age:5,
    test:"test"
}
let clone_obj = {}

for (let key in obj_t){
    clone_obj[key]=obj_t[key];
}
console.log(obj_t)
console.log(clone_obj)
clone_obj.name = "r"
console.log(obj_t)
console.log(clone_obj)
//также для этого можно использовать
let dest = {}

Object.assign(dest,obj_t,user)
console.log(dest)

/*
Object.assign не делает глубого копирования

В объекте могут соержаться вложенные объекты
поэтому нужно производить глубокое копирование (т.к.
по ключу скопируется только ссылка на объект)
 например с loadsh или json
 */

let nested = {
    name:"John",
    contactInfo:{
        phone:"+798",
        address:"NY",
    }
}
//так можно делать без дополнительных библиотек
let new_nested;
new_nested = JSON.parse(JSON.stringify(nested))
new_nested.contactInfo.phone= "555"
console.log(nested);
console.log(new_nested);


//если объявить объект как константу то
//его свойства можно будет менять

const test = {
    name: "John"
};

test.age = 25; // (*)

console.log(test.age); // 25

// То, что мы изучали в этой главе, называется
// «простым объектом» («plain object») или просто Object.

/**
 *В JavaScript есть много других типов объектов:
 *Array для хранения упорядоченных коллекций данных,
 *Date для хранения информации о дате и времени,
 *Error для хранения информации об ошибке.
 *… и так далее.
 */

//task 1 ++

let USER = {};
USER.name = "name";
USER.surname = "surname";
USER.name = "Pete";
delete USER.name;

//task 2

function isEmpty(obj){

    for (let key in obj) {
       return false
    }
    return true
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

//task 3

function sum_salaries(obj){
    let sum = 0
    for (let key in obj) {
        sum += obj[key]
    }
    return sum
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log(sum_salaries(salaries))

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

//task 4

function multiplyNumeric(obj) {
    for (let key in obj) {
        //для определения типа
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu)

// после вызова функции
//29 занятие









