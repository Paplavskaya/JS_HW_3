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
    document.write(`${i}<br>`)
    i--
}