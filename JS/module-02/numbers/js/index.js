let userInput;
const numbers = [];
let total = 0;
sum = 0;

do {
    userInput = prompt('Введите числа');
    if (!isNaN(userInput) && userInput !== null){
    numbers.push(+userInput);
    }
    if(isNaN(userInput)){
        alert('Вы ввели не число, попробуйте снова!');
    }
} while (userInput !== null);

if (numbers.length !=0){
for(total of numbers){
    sum = sum + total;
    }
    alert(`Общая сумма чисел равна ${sum}`)
} else {
    alert('Вы ничего не ввели!')
}
