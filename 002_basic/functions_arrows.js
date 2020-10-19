//синтаксис для объявления функций стрелок
//
///let func = (arg1, arg2, ...argN) => expression
//более короткий вариант
/*
let func = function(arg1, arg2, ...argN) {
  return expression;
};
 */

let sum = (a, b) => a+b;
///можно опускать скобки если один аргумент
let multOn2 = n => n*2
//если нет аргументов то указываются скобки
let getWord = () => "word"
//так можно сделать точку остановки
// debugger
console.log(sum(1,2))
console.log(multOn2(73))
console.log(getWord())

// можно заменить функцию с callback
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
        ()=>console.log("yes"),
         ()=>console.log("no")
)
//для многострочной функции

let sum2 = (a,b)=>{
    let result = a+b;
    return result
}

console.log(sum2(5,5))






