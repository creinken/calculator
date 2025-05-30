let a, b = 0;
let operand = '';

function operate(a, b, operand) {
    let result
    switch (operand) {
        case '+':
            result = add(a, b);
            break;
        
        case '-':
            result = subtract(a, b);
            break;
        
        case '*':
            result = multiply(a, b);
            break;

        case '/':
            result = divide(a, b)
            break;

        default:
            break;
    }
    return result;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}