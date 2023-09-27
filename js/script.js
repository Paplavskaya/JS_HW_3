// Выведите числа от 1 до 50 и от 35 до 8

for(let i = 1; i <= 50; i++){
    console.log(i);
}

for(let i = 35; i >= 8; i--){
    console.log(i);
}

/*Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа 
тегом <br /> друг от друга, чтобы получить столбец, а не строку.*/

let i = 89;
while(i >=11){
    document.write(`${i}<br>`);
    i--;
}

// С помощью цикла найдите сумму чисел от 0 до 100.

let sum = 0;
for(let i = 1; i <= 100; i = i + 1){
    sum = sum + i;
}
console.log(sum);

/*Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 
(1+2+3)*/

for(let i = 1; i <= 5; i++){
    let sum = 0;
    for(let j = 1; j <= i; j++){
        sum = sum + j;
    }
    console.log(sum);
}

// Выведите чётные числа от 8 до 56. Решить задание через while и for.

for(let i = 8; i <= 56; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

let a = 8;
while(a <= 56){
    if(a % 2 === 0){
        console.log(a);
    }
    a++
}

/*Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
…
3*1=3
3*2=6
3*3=9
3*4=12
…*/

for(let i = 2; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}

/*Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет 
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых 
для этого (итерация - это проход цикла), и запишите его в переменную num*/

let n = 1000;
let num = 0;
while(n > 50){
    n = n / 2;
    num = num + 1;
}
console.log(n);
console.log(num);

/*Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до 
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите 
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не 
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь 
может ввести отрицательное значение.*/

let s = 0;
let q = 0;

for(;;){
    let number = +prompt('введите число');

    if(isNaN(number)){
        alert('Ошибка! Ввели не число');
        continue;
    }

    if(number === 0 || number === null){        
        break;
    }
    q = q + 1;
    s = s + number;
}

console.log(`Сумма чисел: ${s}`);
console.log(`Среднее арифметическое: ${s/q}`)

