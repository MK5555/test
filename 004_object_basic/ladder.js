let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        console.log(this.step);
        return this;
    }
};

//чтобы так можно было делать нужно возвращать сам объект
//по сути здесь вызывается метод делается работа и возвращается объект
//и при необходимости мы можем снова вызвать метод т.к. его мы
//вернули объект от которого метод и вызывался
ladder.up().up().up()
ladder.up()
ladder.up()
ladder.down()
ladder.showStep()