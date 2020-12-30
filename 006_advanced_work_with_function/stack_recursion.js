"use strict";

{
    function powRec(x,n){
        if (n <= 1){
            return x
        }
        return x * powRec(x, n - 1)
    }
    /*
        особенность рекурсии в js то что
        движок позволяет выполнять максимально
        около 10к итераций, после которых будет выдавать ошибка
        о том что глубина стека слишком велика
    */
    console.log(powRec(1,9000))

}
/*
контекст выполнения - execution context
 */
{
/*
 информация о процессе выполнения функции хранится в
 специальной переменной - контексте выполнения



 Контекст выполнения – специальная внутренняя структура данных,
 которая содержит информацию о вызове функции. Она включает
 в себя конкретное место в коде, на котором находится
 интерпретатор, локальные переменные функции, значение
 this (мы не используем его в данном
 примере) и прочую служебную информацию.

 Когда функция производит вложенный вызов, происходит следующее:

    Выполнение текущей функции приостанавливается.
    Контекст выполнения, связанный с ней, запоминается в
        специальной структуре данных – стеке контекстов выполнения.
    Выполняются вложенные вызовы, для каждого из которых
        создаётся свой контекст выполнения.
    После их завершения старый контекст достаётся из стека,
        и выполнение внешней функции возобновляется с того места,
        где она была остановлена.
 */
}


{
    let company = {
        sales: [{
            name: 'John',
            salary: 1000
        }, {
            name: 'Alice',
            salary: 600
        }],

        development: {
            sites: [{
                name: 'Peter',
                salary: 2000
            }, {
                name: 'Alex',
                salary: 1800
            }],

            internals: [{
                name: 'Jack',
                salary: 1300
            }]
        }
    };


function sumSalaries(department){
    //считается что члены отдела записаны в массив
    //поэтому это случай выхода из рекурсии
    if (Array.isArray(department)){
        return department.reduce((prev,current) => prev+current.salary,0)
    } else {
        //на случай если это объект, то будет рекурсивно вызвана функция
        //
        let sum = 0
        for (let subdep of Object.values(department)){
            sum += sumSalaries(subdep)
        }
        return sum
    }
}


console.log(sumSalaries(company))

}
{
    let list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    };
}

//task
{
    function sumToCycle(n){
        let sum = 0
        for (let i = n;i > 0;i--){
            sum += i
        }
        return sum
    }

    function sumToRecursion(n){
        if (n <= 1){
            return n
        }
        return n+sumToRecursion(n-1)
    }

    function sumToArithmetic(n){
        return ((1+n)/2)*n
    }

    console.log(sumToCycle(8))
    console.log(sumToRecursion(8))
    console.log(sumToArithmetic(8))
    /*
     P.P.S. Некоторые движки поддерживают оптимизацию
     «хвостового вызова»: если рекурсивный вызов является
     самым последним в функции (как в sumTo выше),
     то внешней функции не нужно будет возобновлять
     выполнение и не нужно запоминать контекст его
     выполнения. В итоге требования к памяти снижаются,
     и сумма sumTo(100000) будет успешно вычислена.
     Но если JavaScript-движок не поддерживает это
     (большинство не поддерживают), будет ошибка:
     максимальный размер стека превышен, так как обычно
     существует ограничение на максимальный размер стека.
     */
}

{
    function factorial(n){
        if (n <=1){
            return 1
        }
        return n*factorial(n-1)
    }

    function fib(n){
        if (n <= 1){
            return 1
        }
        if (n <= 2){
            return 1
        }

        let n_1 = 1
        let n_2 = 1
        for (let i = 2;i < n-1;i++){
            let temp = n_1
            n_1 = n_1 + n_2
            n_2 = temp
        }

        return n_1 + n_2

    }

    function fibRec(n){
        if (n<=1){
            return n
        }
        return fibRec(n-1)+fibRec(n-2)
    }

    console.log(factorial(5))
    console.log(fib(77))
    console.log(fibRec(7))
}


{
    let list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    };

    function printListR(list){
        if (list.next === null){
            console.log(list.value)
            return
        }
        console.log(list.value)
        return printListR(list.next)
    }
    function printListC(list){
        while(list.next !== null){
            console.log(list.value)
            list = list.next
        }
        console.log(list.value)
    }

    printListR(list)
    printListC(list)

}














