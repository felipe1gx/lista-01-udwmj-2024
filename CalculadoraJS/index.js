// Calculadora JS


const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    const expression = display.value;

    // Separa números e operadores
    const numbers = [];
    const operators = [];
    let number = "";

    // Percorre a expressão e separa números e operadores
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (char >= '0' && char <= '9' || char === '.') {
            // Constrói o número como string
            number += char;
        } else {
            // Se encontrar um operador, salva o número anterior e o operador
            if (number) {
                numbers.push(parseFloat(number));
                number = "";
            }
            operators.push(char);
        }
    }
    // Adiciona o último número
    if (number) {
        numbers.push(parseFloat(number));
    }

    // Inicializa o resultado com o primeiro número
    let result = numbers[0];

    // Aplica os operadores na ordem em que aparecem
    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i + 1];

        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case '*':
                result *= nextNumber;
                break;
            case '/':
                if (nextNumber !== 0) {
                    result /= nextNumber;
                } else {
                    display.value = "Error"; // Evita divisão por zero
                    return;
                }
                break;
            default:
                display.value = "Error"; // Para operadores desconhecidos
                return;
        }
    }

    display.value = result;
}