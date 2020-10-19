"use strict";

let user = {
    name:"j",
    age:25,
}

let admin = {
    name:"admin",
    age:55,
}

//this может быть использовано в любой
// функции, оно вычисляется во время
//выполнения функции
user.SayHi = function () {
    console.log("Hi",this.name)
}
user.SayHi()

//можно взаранее подготовить функцию
//и затем сделать ее методом объекта
function sayAge(){
    console.log(this.age)
}

//динамическое вычисление this
admin.sayAge = sayAge
user.sayAge = sayAge
admin.sayAge()
user.sayAge()

//в строгом режиме вызов this вернет undefined
//если вызвали его без объекта
//в нестрогом вернет window для браузера


let user_adv = {
    name: "Джон",
    hi() { console.log(this.name); },
    bye() { console.log("Пока"); }
};

// user_adv.name === "Джон" ? user_adv.hi() : user_adv.bye()

//выдаст ошибку
//this is undefined
// (user_adv.name === "Джон" ? user_adv.hi : user_adv.bye)()
//если мы сделаем так
//let hi = user.hi
//hi() - ошибка т.к. значение this undefined т.к. объект не передавался
//его просто нет при этом вызове

//Для работы через "." js использует ссылочный тип
//"Reference type" - внутренний тип, не используется в
//в прикладном программировании
// Значение ссылочного типа – это комбинация из трёх значений
// (base, name, strict), где:
// base – это объект.
// name – это имя свойства объекта.
// strict – это режим исполнения. Если true,
// то действует строгий режим (use strict).
/*
() являются операторами вызова функции
а . возвращает значение ссылочного типа
и соответственно при попытке вызова
 */

/*
и в том примере проблема в том, что
вызов будет происходить не от объекта
user.hi
а по сути будет вызываться просто функция hi a не user.hi
поэтому ссылочный тип не сможет правильно определить
base
 */

/*
у стрелочных функций нет this
но они могут получить его из
внешней обычной функции
 */
let user_a = {
    firstName: "Илья",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user_a.sayHi(); // Илья

//task 1
//важно в вс
let user_t1 = {
    name: "Джон",
    go: function() { console.log(this.name) }
};
//если так вызвать то нужно ставить ;
//(...) считается что объект не определен
    //скобки не вылияют на вызов
(user_t1.go)()


// вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?
let obj, method;
obj = {
    go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]
(obj.go)();             // (2) [object Object]

//суть как с reference type
// (method = obj.go)();    // (3) undefined
//любой оператор имеет тоже действие что и =
//по сути тут вызов (expression).method()
// (obj.go || obj.stop)(); // (4) undefined
//this работает только в том случае если функция
//вызывается как метод, если вызвать this как
//объект  то он будет undefined

function makeUser() {
    return {
        name: "Джон",
        ref: this,
        ref_() {
            return this;
        }
    };
}

let user_1 = makeUser();

//вызвана как поле не норм
// console.log(user_1.ref.name)
//вызвана как метод все норм
console.log(user_1.ref_().name)