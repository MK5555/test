"use strict";



let range = {
    from:1,
    to:5
}

//чтобы объект стал итерируемым нужно добавить
//в объект метод Symbol.iterator
//метод вернет объект с методом
// next() если он есть, если его
// нет то вернется ошибка
//для получения следующего объекта вызывается
// этот метод
// результат должен иметь вид
//done:Boolean, value: any}
//где done = true говрит о том, что итерация
//закончена

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true}
            }
        }
    }
}

for(let num of range){
    console.log(num)
}


//итераторы можно перебирать и вручную
//хоть это и редко нужно, но это дает
//много контроля над процессом for of

    let str = "Hello"
    let iterator = str[Symbol.iterator]();
    while(true){
        let result = iterator.next();

        if(result.done)break;
        console.log(result.value)
    }

/*
есть два официальных термина которые стоит различать

Итерируемые объекты – это объекты,
которые реализуют метод Symbol.iterator

мПсевдомассивы – это объекты, у которых
 есть индексы и свойство length,
то есть, они выглядят как массивы.

 */

// метод Array.from принимает итерир. объект
// или псевдомассив и делает из них настоящий массив
//что позволяет им использовать методы pop/push и тд
//без этого преобразования они не могут с ними работать
//вторым аргументом можно передать
// трансформирующую функцию
//3 thisArg который установит this для функции

//пример такой функции
let arr = Array.from(range, num => num * num)
console.log(arr)

{
    let str = '𝒳😂';
    let chars = Array.from(str);
    console.table(chars)
}











