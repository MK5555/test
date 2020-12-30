"use strict";

{
    let arr = ["Ilya", "Kantor"]
    // деструктурирующее присваивание
// записывает firstName=arr[0], surname=arr[1]
    let [firstName, surname] = arr;
    console.log(firstName)
    console.log(surname)
    //можно использовать переменные вместо массива
    //и вместе с ними методы
    let [firstName1, surname2] =
        "Ilya Kantor".split(' ');

    console.log(firstName1)
    console.log(surname2)
    /*
    что важно «Деструктурирующее присваивание»
    не разрушает массив а только копирует его элементы
    в переменные
     */
    /*
    можно использовать вместе с map и objects
     */
    let user = new Map();
    user.set("name", "John");
    user.set("age", "30");

    for (let [key, value] of user) {
        console.log(`${key}:${value}`); // name:John, затем age:30
    }
    //если нужно получить часть массива
    let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
    console.log(name1)
    console.log(name2)
    //это массив
    //а не переменная
    console.log(rest)
}

//тоже самое можно проделывать с объектами
{
    let options = {
        title: "Menu",
        height: 200,
        width: 100
    };

    let {title, ...rest} = options;

    console.log(title,rest)



}


























