"use strict";
{
let user = {
    name:"John",
    age:30,

    toString(){
        return `{name:"${this.name}",age: ${this.age}}`;
    }
}

console.log(user.toString())

//JSON (JavaScript Object Notation)
//есть два метода для работы с JSON

// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.

let student = {
    name: 'John',
    age:30,
    isAdmin:false,
    courses: ['html','css','js'],
    wife:null
};

let json = JSON.stringify(student)
console.log(json)
}
/*
JSON поддерживает следующие типы данных:

    Объекты { ... }
    Массивы [ ... ]
    Примитивы:
        строки,
        числа,
        логические значения true/false,
        null.

 */

//т.к. JSON не привязан к языку то
//он пропускает некоторые типы данных
{
    let user = {
        sayHi() { // будет пропущено
            alert("Hello");
        },
        [Symbol("id")]: 123, // также будет пропущено
        something: undefined // как и это - пропущено
    };

    console.log( JSON.stringify(user))
    //не работает с циклическими ссылками
    let room = {
        number: 23
    };

    let meetup = {
        title: "Conference",
        participants: ["john", "ann"]
    };

    meetup.place = room;       // meetup ссылается на room
    room.occupiedBy = meetup; // room ссылается на meetup
    // JSON.stringify(meetup); // Ошибка: Преобразование цикличной структуры в JSON
    // console.log(meetup)
    /*
Полный синтаксис JSON.stringify:

let json = JSON.stringify(value[, replacer, space])

value
Значение для кодирования.
replacer
Массив свойств для кодирования или функция соответствия function(key, value).
space
Дополнительное пространство (отступы), используемое для форматирования.
 */

//    чтобы пример заработал можно сделать так, чтобы
//    сериализации подвергались лишь некоторые поля
    let str = JSON.stringify(meetup, ['title',
        'participants', 'place', 'name', 'number'])
    //после этих операций отладцчик не выдает ошибок
    console.log(str)
//    т.к. список аргументов мб довольно длинным,
//    то можно использовать функцию

    console.log(JSON.stringify(meetup, function replacer(key, value) {
        // console.log(`${key}: ${value}`);
        if (key === 'occupiedBy'){
            return undefined
        }

        return  value;
    }));

    //третий аргумент позволяет форматировать текст
    //указывает сколько пробелов нужно использовать
    {
        let user = {
            name: "John",
            age: 25,
            roles: {
                isAdmin: false,
                isEditor: true
            }
        };
            //
            console.log(JSON.stringify(user,null,2))

    }
}

//если что есть пользовательский метод toJSON
{
    let room = {
        number: 23
    };

    let meetup = {
        title: "Conference",
        date: new Date(Date.UTC(2017, 0, 1)),
        room
    };

    //тут room представлена числом
    //мы можем сделать так чтобы оно бьыло представлено строкой

    //например для date также есть свой метод toJSON
    //именно благодаря ему время возвращается строкой
    console.log(JSON.stringify(meetup))
    let roomTo = {
        number: 23,
        toJSON() {
            return this.number+"";
        }
    };

    let meetupCustom = {
        title: "Conference",
        date: new Date(Date.UTC(2017, 0, 1)),
        roomTo
    };

    console.log(JSON.stringify(meetupCustom))

}

{
    /*

    str
    JSON для преобразования в объект.
    reviver
    Необязательная функция, которая будет вызываться для каждой пары
     (ключ, значение) и может преобразовывать значение.
     */
    let numbers = "[0, 1, 2, 3]";
    let value = JSON.parse(numbers)
    console.log(value)
    let user = '{ "name": "John", "age": 35, "isAdmin": false,' +
        ' "friends": [0,1,2,3] }';

    user = JSON.parse(user);
    console.log(user)

}

//reviver - оживить (тот, кто возраждает)
{
    //нужно  десериализовать строку
    let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
    let meetup = JSON.parse(str);
    console.log(meetup)
    //тут возникает проблема, что дата принимается ка строка а не как Date
//    для этого и нужна функция reviver
//    после чего date становится нормальным объектом date
    //TODO
    // если что это работает и для вложенных объектов
    console.log(JSON.parse(str,function (key,value){
        if (key == 'date'){
            return new Date(value)
        }
        return value
    }))
}

//task
{
    let user = {
        name: "Василий Иванович",
        age: 35
    };

    let userJSON = JSON.stringify(user)

}
//task 2
{
    let room = {
        number: 23
    };

    let meetup = {
        title: "Совещание",
        occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
        place: room
    };

// цикличные ссылки
    room.occupiedBy = meetup;
    meetup.self = meetup;
console.log(meetup)
    console.log(JSON.stringify(meetup, function replacer(key, value) {
            if (key != "" && value == meetup){
                return undefined
            }
            return value
    }));

}

// return (key != "" && value == meetup) ? undefined : value;













