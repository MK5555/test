//Функция конструктор не отличается от обычной
//но есть два соглашения
//1) Имя должно начинаться с большой буквы
//2) Функция должна вызываться при помощи new
//   *если она так вызывается, то создается
//   *пустой объект модифицирует this(обычно)
//   *возвращает  this
function User(name){
    // this = {};  (неявно)
    this.name = name;
    this.isAdmin = false;

    //можно определять методы
    this.SayHi = function (){
        console.log("Hi User method")
    }
    // return this;
}

let user = new User("D")

console.log(user)
user.SayHi()

// При помощи new.target мы можем
// проверить как была вызвана функция
// если с new то будет undefined
// если нет то ,там будет сама функция
function User_target() {
    console.log(new.target);
}
// без "new":
User_target(); // undefined
// с "new":
new User_target()

//такое поле позволяет определить поведение функции
//в зависимости от как мы ее вызываем
//иногда используется в библиотеках но в целом
//не очень хорошая практика т.к. может вызвать трудности
//с пониманием кода

//обычно конструкторы ничего не возвращают
//но если возвращают то

// При вызове return с объектом, будет возвращён объект, а не this.
//    При вызове return с примитивным значением,
//    примитивное значение будет отброшено.


