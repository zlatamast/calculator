
// 0 загружается страница, на который 4 кнопки
// 0,5 к каждый кнопке привязываем функцию с действием
// 1 создать функции действий 
// 2  внутри функций действий создаем два поля  для введения чисел промпт и сохраняем результат
// 3 внутри функции выводим результат действия на экран

function writeName() {
    let name = document.querySelector('#name').value;

    // alert(`Привет, ${name}!`);
    return name;
}

function writeNumber1() {
    let number1 = document.querySelector('#number1').value;
    return number1;
}

function writeNumber2() {
    let number2 = document.querySelector('#number2').value;
    return number2;
}

// ПРОВЕРКА НА ТИП ДАННЫХ ЧЕРЕЗ УСЛОВИЕ
// function checkDataType(number1, number2) {
//     numberOneDataType = Number(number1.value);
//     numberTwoDataType = Number(number2.value);

//     let condition = (typeof numberOneDataType == 'number') && (typeof numberTwoDataType == 'number');

// if (condition == false) {
//     let error = document.querySelector('#error').addEventListener(mouseleave).innerHTML = 'Для продолжения вычислений нужно ввести числа.';
// } else {
//     getNumbers();
// }
// }

function getNumbers() {
    let firstNumber = writeNumber1();
    let secondNumber = writeNumber2();

    let arrNumbers = [firstNumber, secondNumber];
    return arrNumbers;
}

function calcSum() {
    let getNumbersResult = getNumbers();
    
    let resultSum = +getNumbersResult[0] + +getNumbersResult[1];
    let answer = document.querySelector('#answer').innerHTML = `Привет, ${writeName()}! <br> Ответ: ${resultSum}`;
}

function calcSubstr() {
    let getNumbersResult = getNumbers();

    let resultSubstr = +getNumbersResult[0] - +getNumbersResult[1];
    let answer = document.querySelector('#answer').innerHTML = `Привет, ${writeName()}! <br> Ответ: ${resultSubstr}`;
}

function calcDiv() {
    let getNumbersResult = getNumbers();

    let resultDiv = +getNumbersResult[0] / +getNumbersResult[1];
    if (getNumbersResult[1] == 0) {
        let answer = document.querySelector('#answer').innerHTML = `${writeName()}, делить на ноль нельзя!`;
        return answer;
    }
        
    let answer = document.querySelector('#answer').innerHTML = `Привет, ${writeName()}! <br> Ответ: ${resultDiv}`;
}

function calcMult() {
    let getNumbersResult = getNumbers();

    let resultMult = +getNumbersResult[0] * +getNumbersResult[1];
    let answer = document.querySelector('#answer').innerHTML = `Привет, ${writeName()}! <br> Ответ: ${resultMult}`;
}