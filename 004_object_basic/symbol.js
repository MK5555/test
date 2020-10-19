//символы представляют собой
//уникальный id
//Могут быть ключами у объекта (кроме них еще только строки)
//описание мб одинаковым, но все равно это будут
//два разных объекта
let id = Symbol("id");
let id1 = Symbol("id");

//false
console.log(id===id1)
//символы не преобразуются в строки
//поэтому нужно явно их преобразовать
console.log(id.toString())
//вывести содержимое текстовой метки
console.log(id1.description)
//реальное применение для символов это добавление
//полей к объекту, гарантирующее, что не возникнет
//конфликта имен и наш идентификатор будет уникальным
let user = {
    name:"conflict",
}
user[id] = 1;
console.log(user)

code()
console.log(user)

let new_nested;
new_nested = JSON.parse(JSON.stringify(user))
console.log(new_nested)
//скопирует все свойства
new_nested = Object.assign({},user)
console.log(new_nested)
//такой перебор не найдет символьных полей

for (let key in user) {
    console.log(key)
}

//иногда нужно чтобы символы с именами были одной сущностью
//для этого есть глобальный реестр символов

let global = Symbol.for("global")
let same_global = Symbol.for("global")
//будет истинно в отличиие от первого примера
console.log(global===same_global)

let new_id_test = Symbol.for("new_id");
console.log(user[new_id_test])
//можно получить имя по символу
console.log(Symbol.keyFor(new_id_test))
//извлесь символы можно так
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys



