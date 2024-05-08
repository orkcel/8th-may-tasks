let a = parseFloat(prompt("Enter the first number (a):"));
let b = parseFloat(prompt("Enter the second number (b):"));
let operator = prompt("Enter the operator (+, -, *, /):");

let result;

if (operator === "+") {
    result = a + b;
} else if (operator === "-") {
    result = a - b;
} else if (operator === "*") {
    result = a * b;
} else if (operator === "/") {
    result = a / b;
} else {
    console.log("Invalid operator");
}

if (result !== undefined) {
    console.log("Result:", result);
}
