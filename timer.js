/*
function f(n)

{
    let counter = n, timerId;
    timerId = setInterval(() => {
          console.log(counter)
        counter--;
    }, 1000);

    if (counter < 0) {
        clearInterval(timerId);
    }

}
f(20)
*/
function delay_prom (n)
{
// создадим новый промис
    const promise = new Promise((resolve, reject) => {
        // оценку, которые мы получим определим случайным образом спустя некоторое время (например, 5 секунд)
        setTimeout(() => {
            // сгенерируем оценку от 2 до 5
            const mark = Math.floor(Math.random() * 4) + 2;
            // если оценка больше 3, то...
            if (mark > 3) {
                // завершим промис успешно: для этого вызовем функцию resolve() и передадим ей в скобках полученную оценку (это нужно для того, чтобы мы затем её могли получить в методе then())
                resolve(mark);
            }
            // завершим промис с ошибкой
            reject(mark);
        }, n);
    });
// выполнение действий после завершения промиса выполняется с помощью методов: then (в случае успеха) и catch (при ошибке)
    promise
        .then(result => console.log(`Ура! Я сдал экзамен на ${result}! Папа, как и обещал дал мне 100$.`))
        .catch(result => console.log(`Увы, я получил оценку ${result}! Папа мне не дал 100$`));
}
delay_prom(5000)