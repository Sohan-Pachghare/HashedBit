function calculator(a, operand, b) {

    switch (operand) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return NaN;
    }

}

console.log(calculator(2, '*', 2));