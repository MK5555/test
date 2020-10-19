"use strict";


let user = {
    name: "John",
    money: 1000,

    //используется для того чтобы
    //заменить устаревши методы valueOf
    //и to String
    //единственное требование, что
    //все эти методы должны возвращать примитив а не объект
    //{так можно не удивляться что toString вернет число или bool}
    [Symbol.toPrimitive](hint) {
        console.log(String(hint));

        if(String(hint) == "string"){
            return this.name
        }

        if(String(hint) == "number"){
            return this.money
        }

        return 200


        // return hint === "string" ? `{name: "${this.name}"}` : this.money;
    },
    //их тоже можно применять
    // toString(){
    //     return this.name
    // },
    // valueOf(){
    //     return this.money
    // }
};

console.log(+user)
console.log(String(user))