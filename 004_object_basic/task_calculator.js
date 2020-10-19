function read(a,b){
    this.first_val = a;
    this.second_val = b;

}

function sum(){
    return this.first_val + this.second_val
}

function mul(){
    return this.first_val * this.second_val
}


let calculator = {
    first_val:0,
    second_val:0,
    read,
    sum,
    mul
}

calculator.read(42,2)
console.log(calculator.sum())
console.log(calculator.mul())