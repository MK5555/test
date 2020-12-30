"use strict";
{
    // так можно получить
    //текущее время
    let now = new Date();
    console.log(now)
    // 0 соответствует 01.01.1970 UTC+0
    let Jan01_1970 = new Date(0);
    //прибавить один день к начальной дате
    //время считается в миллисекундах
    let newDate = new Date(24*3600*1000);
//    таймстамп (англ. timestamp) число миллисекунд прошедших
//    с 1 января 1970
//    можно и вычитать дату
//    получим минус 1 день
    let date = new Date("1997-12-23")
    console.log(date)
    console.log(new Date(2011, 0, 1, 0, 0, 0, 0))
    console.log(new Date(2011, 0, 1))
}

{
//    получение компонентов даты
    let test = new Date(2011, 0, 1, 0, 0, 0, 0)
    console.log(test.getFullYear())
    console.log(test.getMonth())
    console.log(test.getDate())
    console.log(test.getHours())
    console.log(test.getMinutes())
    console.log(test.getSeconds())
    console.log(test.getMilliseconds())
    //можно получать в формате utc
    console.log(test.getUTCSeconds())
}

//при необходимости можно устанавливать даты
{
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    console.log(today)

//доступно удобное автоисправление даты,
//не нужно волноваться о том високосный год
//или сколько дней в месяце, все будет сделано автоматически

    let date = new Date(2013, 0, 32);
    console.log(date)
    console.log(date.getDate() + 32)
    console.log(date.getSeconds() + 70)
    //прибавление происходит именно к текущей дате
    date.setDate(222)
    console.log(date)
}
//засекать время можно примерно так
{
    let start = new Date();

    for (let i = 0;i < 10000000;i++){
        let doSMTH = i*i*i
    }
    let end = new Date()
    console.log("time",end-start)
}

//bench
//интерпретатор js выполняет множетсво оптимизаций
//поэтому такие замеры не всегда являются точными
//процессор может выделять по разному времени оптимизации
//могут быть произведены а могут и не быть...
{
    function diffSubtract(date1, date2) {
        return date2 - date1;
    }

    function diffGetTime(date1, date2) {
        return date2.getTime() - date1.getTime();
    }

    function bench(f) {
        let date1 = new Date(0);
        let date2 = new Date();

        let start = Date.now();
        for (let i = 0; i < 100000; i++) f(date1, date2);
        return Date.now() - start;
    }

    let time1 = 0;
    let time2 = 0;

    for (let i = 0; i < 10; i++) {
        time1 += bench(diffSubtract);
        time2 += bench(diffGetTime);
    }

    console.log('Итоговое время diffSubtract: ' + time1)
    console.log('Итоговое время diffGetTime: ' + time2)

}

//парсинг строки
//Формат строки должен быть следующим:
// YYYY-MM-DDTHH:mm:ss.sssZ, где:
// Символ "T" используется в качестве разделителя.
// 'Z' обозначает часовой пояс в формате +-hh:mm
{
    let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
    let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
    console.log("ms",ms)
    console.log("ms date",date)
}

/*
Счёт месяцев начинается с нуля (да, январь – это нулевой месяц).
Дни недели в getDay() также отсчитываются с нуля,
    что соответствует воскресенью.
performance.now() если нужна точность до мкс
 */
console.log(performance.now())

// task 1 Создайте дату
{
    console.log(new Date(2012,1,20,3,12))
}

//task 2 Покажите день недели
{
    var mapDay = new Map()
    mapDay.set(0,"ВС")
    mapDay.set(1,"ПН")
    mapDay.set(2,"ВТ")
    mapDay.set(3,"СР")
    mapDay.set(4,"ЧТ")
    mapDay.set(5,"ПТ")
    mapDay.set(6,"СБ")
    mapDay.set(7,"ВС")

    function getWeekDay(date){
        return mapDay.get(date.getDay())
    }
    function getLocalDay(date){
        let day = date.getDay()
        if (day === 0){
            day = 7
        }
        return day
    }


    let date = new Date(2014, 0, 3)
    console.log(getWeekDay(date))
}




// task 3
//Какой день месяца был много дней назад?
{
    function getDateAgo(date,days){
        let newDate = new Date(date.getTime())
        newDate.setDate(newDate.getDate()-days)
        return newDate.getDate()
    }
    let date = new Date(2015, 0, 2);
    console.log("3 task ",getDateAgo(date,365))
}
// Сколько сегодня прошло секунд?
//Сколько секунд осталось до завтра?
{
function getSecondsToday(){
    let now = new Date()
    console.log(now)
    let hours      = now.getHours()
    let minutes  = now.getMinutes()
    let seconds  = now.getSeconds()
    let milliseconds  = now.getMilliseconds()
    //ну вообще хз мб немного спорно
    //т.к. нужно отдельно договариваться о том нужно ли
    //добавлять

    return hours*3600+minutes*60+seconds+Math.round(milliseconds/1000)
}

    function getSecondsToday2() {
        let now = new Date();
        console.log(now)
        // создаём объект с текущими днём/месяцем/годом
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        let diff = now - today; // разница в миллисекундах
        return Math.round(diff / 1000); // получаем секунды
    }

function getSecondToNextDay(){
    return 24*3600 - getSecondsToday()
}

function getSecondsToTomorrow() {
        let now = new Date();

        // завтрашняя дата
        let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

        let diff = tomorrow - now; // разница в миллисекундах
        return Math.round(diff / 1000); // преобразуем в секунды
    }

console.log(getSecondsToday())
console.log(getSecondsToday2())
console.log(getSecondToNextDay())
console.log(getSecondsToTomorrow())
}

//Форматирование относительной даты
{
    function formatDate(date){
        let now = new Date()
        let deltaTime = now.getTime() - date
        if (deltaTime < 1000) {
            console.log("прямо сейчас")
            return
        }
        if (deltaTime < 60*1000){
            console.log(Math.round(deltaTime/1000) +" сек. назад")
            return
        }

        if (deltaTime < 60*60*1000){
            console.log(Math.round(deltaTime/1000) +" мин. назад")
            return
        }

        console.log(date.toLocaleString())

    }

    formatDate(new Date(new Date - 1))
   formatDate(new Date(new Date - 10*1000))
    formatDate(new Date(new Date - 18*60*1000))
  formatDate(new Date(new Date - 86400*1000))

}








