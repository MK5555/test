"use strict"
//continue break
//работают также как и в др яп

let i_while = 5;

while (i_while>0){
    console.log(i_while);
    i_while--;
}

do{
    i_while++;
    console.log(i_while);

}while (i_while < 5)

// начало 	i = 0 	Выполняется один раз при входе в цикл
// условие 	i < 3 	Проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится.
// шаг 	i++ Выполняется после тела цикла на каждой итерации перед проверкой условия.
// тело alert(i) 	Выполняется снова и снова, пока условие вычисляется в true.

for (let i = 0;i < 5;i++){
    console.log(i);
}
/*
также при необходимости можно использовать метки
также стоит знать, что метки не могут передать
управление куда угодно и действуют они только внутри цикла
 */
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
       console.log("i = ",i)
       if (i>0) break outer; // (*)
    }

}





















