// Day 4 - Functions

// Sum Function
function add(a, b) {
    return a + b;
}

// Factorial Function
function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

console.log("Sum =", add(10, 20));
console.log("Factorial =", factorial(5));