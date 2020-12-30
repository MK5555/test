"use strict";
/*
Map в отличии от Object позволяет
использовать любые ключи
 */

/*

    new Map() – создаёт коллекцию.
    map.set(key, value) – записывает по
     ключу key значение value.
    map.get(key) – возвращает значение по ключу или
     undefined, если ключ key отсутствует.
    map.has(key) – возвращает true, если
    ключ key присутствует в коллекции, иначе false.
    map.delete(key) – удаляет элемент по ключу key.
    map.clear() – очищает коллекцию от всех элементов.
    map.size – возвращает текущее количество элементов.

 */
{
    let map = new Map();
    map.set("1","str1")
    map.set(1,"num1")
    map.set(true,"bool1")

    console.log(map.size)
    console.log(map.has(1))
    //в map поддерживается цепочка вызовов
    map.set("2", "str1")
        .set(2, "num1")
        .set(false, "bool1");
    console.table(map)
}

{
    //ключами могут быть и объекты
    //в отличии от объектов ключи не
    //будут преобразованы к строке

    //алгоритм для определения ключей
    //не может быть изменен
    //представляет собой сравнение
    //===, и может отличать NaN
    let john = { name: "John" };
    let visitsCountMap = new Map();
    visitsCountMap.set(john, 123);
    console.table(visitsCountMap)
}

{
    //перебор значений map
    //есть три способа
    //по ключам
    //по значениям
    //по парам [key,value]
    //в map перебор происходит в том порядке,
    //в котором добавлялись элементы
    //можно еще использовать метод forEach

    let recipeMap = new Map([
        ["огурец", 500],
        ["помидор", 350],
        ["лук",    50]
    ]);

    for (let vegetable of recipeMap.keys()){
        console.log(vegetable)
    }
    for (let vegetable of recipeMap.values()){
        console.log(vegetable)
    }
    for (let entry of recipeMap){
        console.log(entry)
    }
    recipeMap.forEach((value,key
              ,map)=>{
        console.log(`${key} ${value}`)
    })
}

{
    //если мы хочем преобразовать
    //объект в карту или наоборо
    //то мф можем использовать методы
//    Object.entries(obj)  Object.fromEntries
    let obj = {
        name: "John",
        age: 30
    };
    //здесь имя методы становится ключом
    //ну значение так и остается значением
    let map = new Map(Object.entries(obj));
    //здесь обратное преобразование
    let prices = Object.fromEntries([
        ['banana', 1],
        ['orange', 2],
        ['meat', 4]
    ]);
    //для преобразования в функцию
    //можно засунуть  map.entries()
    //или просто map
    console.log(map)
    console.log(prices)
}

{
    //set множество уникальных значений без ключа

//     new Set(iterable) – создаёт Set, и если в качестве
//     аргумента был предоставлен итерируемый объект
//     (обычно это массив), то копирует его значения
//     в новый Set.
// set.add(value) – добавляет значение (если оно уже
// есть, то ничего не делает), возвращает тот же объект set.

// set.delete(value) – удаляет значение, возвращает true,
// если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение
// присутствует в множестве, иначе false.

// set.clear() – удаляет все имеющиеся значения.

// set.size – возвращает количество элементов в множестве.
    let set = new Set();

    let john = { name: "John" };
    let pete = { name: "Pete" };
    let mary = { name: "Mary" };

    set.add(john);
    set.add(pete);
    set.add(mary);
    set.add(john);
    set.add(mary);

    console.log(set.size); // 3

    //перебрать можно при помощи for of
    //или при помощи forEach
    for (let user of set){
        console.log(user.name)
    }
    set.forEach((value, valueAgain, set) => {
        console.log(value);
    });
}

//Фильтрация уникальных элементов массива
{
    function unique(arr) {
        let set = new Set(arr)
        let new_arr = []
        for (let k of set){
            new_arr.push(k)
        }
        return new_arr
        //или просто
    //    return Array.from(new Set(arr))
    }
    let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    console.log(unique(values))
}

//Отфильтруйте анаграммы
{
    function aclean(arr){
        let map = new Map()
        for (let word of arr){
            map.set(word.split("").sort().join().toLowerCase(),word)
        }
        return Array.from(map.values())
    }
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    console.log(aclean(arr))
}





















































