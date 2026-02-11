let results = [];
let continueLoop = true;

document.write("<h2>Calculation Results</h2>");
document.write("<table border='1' style='border-collapse: collapse; text-align: center;'>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (continueLoop) {

    let x = prompt("Enter first number:");
    if (x === null) break;

    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;

    let y = prompt("Enter second number:");
    if (y === null) break;

    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "Error: Non-numeric input";
    } 
    else {
        x = Number(x);
        y = Number(y);

        switch(operator) {
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "*":
                result = x * y;
                break;
            case "/":
                result = y !== 0 ? x / y : "Error: Divide by 0";
                break;
            case "%":
                result = y !== 0 ? x % y : "Error: Divide by 0";
                break;
            default:
                result = "Error: Invalid operator";
        }
    }

    if (!isNaN(result)) {
        results.push(result);
    }

    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    continueLoop = confirm("Do you want to perform another calculation?");
}

document.write("</table>");
if (results.length > 0) {

    let total = results.reduce((sum, val) => sum + val, 0);
    let min = Math.min(...results);
    let max = Math.max(...results);
    let avg = total / results.length;

    document.write("<h2>Summary</h2>");
    document.write("<table border='1' style='border-collapse: collapse; text-align: center;'>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}
