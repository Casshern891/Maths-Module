function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function square(num) {
    return num * num;
}

function cube(num) {
    return num * num * num;
}

function fib(n) {
    if (n < 2) {
        return n;
    } 
    return fib(n-1) + fib(n-2);
}

function isPrime(num) {
    for(i=2; i <= (num / 2); i++) {
        if (num % i === 0 && i !== num) {
            return false
        }
    }
    return true;
}

function firstNPrimes(n) {
    let count = 0;
    let list = [];
    for(let j=2; count <= n; j++) {
        if (isPrime(j)) {
            list.push(j);
            count++;
        }
    }
    return list;
}

function showTimesTable(num) {
    for(let i = 1; i <= 15; i++) {
        let result = i * num;
        console.log(num + " x " + i + " = " + result + "\n");
    }
}

showTimesTable(7);