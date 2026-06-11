// Day 3 - Loops

console.log("Number Series from 1 to 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\nStar Pattern");

for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}