//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function calculateAverage(numbers) {
    const numericElements = numbers.filter(element => typeof element === 'number' && !isNaN(element));

    if (numericElements.length === 0) {
        return "Немає числових елементів у масиві.";
    }

    const sum = numericElements.reduce((acc, num) => acc + num, 0);
    const average = sum / numericElements.length;

    return average;
}

const userInput = prompt("Введіть елементи масиву:");

const inputArray = userInput.split(/[,\s]+/).map(element => parseFloat(element.trim()));

const resultСalculateAverage = calculateAverage(inputArray);
console.log(resultСalculateAverage);


//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = parseFloat(prompt("Введіть перше число (x):"));
let znak = prompt("Введіть математичний знак (+, -, *, /, %, ^):");
let y = parseFloat(prompt("Введіть друге число (y):"));

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return y !== 0 ? x / y : "Помилка: Ділення на нуль неможливе.";
        case '%':
            return y !== 0 ? x % y : "Помилка: Ділення за модулем на нуль неможливе.";
        case '^':
            return Math.pow(x, y);
        default:
            return "Помилка: Невірний знак операції.";
    }
}

let resultDoMath = doMath(x, znak, y);
console.log("Результат: " + resultDoMath);

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function mergeArrays() {
    let mergedArray = [];

    let firstArrayLength = parseInt(prompt("Введіть довжину першого масиву:"));

    let secondArrayLength = parseInt(prompt("Введіть довжину другого масиву:"));

    for (let i = 0; i < firstArrayLength; i++) {
        let element = parseInt(prompt("Введіть елемент першого масиву:"));
        mergedArray.push(element);
    }

    let secondArray = [];
    for (let j = 0; j < secondArrayLength; j++) {
        let element = parseInt(prompt("Введіть елемент другого масиву:"));
        secondArray.push(element);
    }

    mergedArray.push(secondArray);

    return mergedArray;
}

let resultMergeArrays = mergeArrays();
console.log("Масив:", JSON.stringify(resultMergeArrays));

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function removeCharacters(inputString, charactersToRemove) {
    const charactersArray = charactersToRemove.split('');

    const resultString = inputString.split('').filter(char => !charactersArray.includes(char)).join('');

    return resultString;
}

let inputString = prompt("Введіть рядок:");
let charactersToRemove = prompt("Введіть символи для видалення:");

let resultRemoveCharacters = removeCharacters(inputString, charactersToRemove);
console.log(resultRemoveCharacters);


