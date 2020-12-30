"use strict";

{
    let john = { name: "John" };

    let array = [ john ];

    john = null; // перезаписываем ссылку на объект

//объект не удаляется т.к. есть ссылка на него в массиве
    console.log(array[0],john)
}

{
    //тоже самое будет если сделаем это с map
    let john = { name: "John" };

    let map = new Map();
    map.set(john, "...");

    john = null; // перезаписываем ссылку на объект
    console.log(map,john)
}
//weakMap
{
    let weakMap = new WeakMap();
    let obj = {k:'a'};
    weakMap.set(obj,"ok")
    //error
    // weakMap.set("test","not ok")
    console.log(weakMap)
    console.log(weakMap.has(obj))
    obj = null
    //WeakMap не поддерживает перебор и методы
    // keys(), values(), entries(),
    // так что нет способа взять все ключи или значения из неё.
    console.log(weakMap.has(obj))
    console.log(weakMap)
    //но есть особенность, что объект будет удален только
//    сборщиком мусора поэтому некоторое
//    время он может находится еще в памяти
}

{
    //защита для счетчика
    console.log("null",null||0)
    console.log("undefined",undefined||0)
    console.log("NaN",NaN||0)
    //пример применения на практике weakMap
    //хотя хз мб легче использовать обычные
    //вроде может пригодиться если у приложения
    // сложная архитектура и очистка мб затруднена

    // 📁 visitsCount.js
    let visitsCountMap = new Map();
    function countUser(user) {
        //на случай если будет null
        let count = visitsCountMap.get(user) || 0;
        visitsCountMap.set(user, count + 1);
    }
    // 📁 main.js
    let john = { name: "John" };

    countUser(john); //ведём подсчёт посещений

// пользователь покинул нас
    john = null;
}

{
    //другая сфера применения это кеширование
    let cache = new Map();
    function process(obj) {
        if (!cache.has(obj)) {
            let result = /* тут какие-то вычисления
            результата для объекта */ obj;

            cache.set(obj, result);
        }

        return cache.get(obj);
    }
    // Теперь используем process() в другом файле:

// 📁 main.js
    let obj = {/* допустим, у нас есть какой-то объект */};

    let result1 = process(obj); // вычислен результат

// ...позже, из другого места в коде...
    let result2 = process(obj); // ранее вычисленный
    // результат взят из кеша

// ...позже, когда объект больше не нужен:
    obj = null;

    console.log(cache.size); // 1 (Упс! Объект всё ещё в кеше,
    // занимает память!)
    //если  использовать weakMap то проблема будет решена

    /*
    как раз тут и возникает проблема если map находится
    в другой области видимости то удаление и правда становится
    более тяжелой задачей
     */

}

//task 1
{
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];
    //используется для отваета на вопросы да/нет
    //add, has и delete - поддерживаемые операции
    let weakSet  = new WeakSet();
    weakSet.add(messages[0])
    console.log(weakSet.has(messages[0]))
    console.log(weakSet.has(messages[1]))
    console.log(weakSet.has(messages[2]))
    /*
        можно конечно использовать символьное поле
        isRead но с архитектурной точки зрения
        лучше weakSet
    */
}
//task 2
{
    let messages = [
        { text: "Hello", from: "John" },
        { text: "How goes?", from: "John" },
        { text: "See you soon", from: "Alice" }
    ];

    let weakMap = new WeakMap()
    weakMap.set(messages[0],"11.12.2020")
    console.log(weakMap.get(messages[0]))
    console.log(weakMap.get(messages[1])||false)
    console.log(weakMap.get(messages[2])||false)
}





