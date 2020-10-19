describe("pow", function() {
    //можно сделать перед одним
    //before
    //after
    // а можно сделать перед всеми
    //beforeEach
    //afterEach
    // beforeEach(() => console.log("Тестирование началось – перед тестами"));
    // afterEach(() => console.log("Тестирование закончилось – после всех тестов"));
    it("возводит в степень n", function() {
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(-2, 3), -8);
        assert.equal(pow(3, 3), 27);
        assert.equal(pow(4, 3), 64);
        assert.equal(pow(3, 4), 81);
    });
    it("3 в степени 5 будет 243", function() {
        assert.equal(pow(3, 5), 243);
    });


    describe("Возводит x в степень 3",function() {

        function makeTest(x) {
            let expected = x*x*x;
            it(`${x} в степени 3 будет ${expected}`,function () {
                assert.equal(pow(x,3),expected);
            });
        }
        for (let x = 1; x <= 5; x++) {
            makeTest(x)
        }

    });
    //далее можно писать и другие тесты
    it("для отрицательных n возвращает NaN", function() {
        assert.isNaN(pow(2, -1));
    });

    it("для дробных n возвращает NaN", function() {
        assert.isNaN(pow(2, 1.5));
    });


});

