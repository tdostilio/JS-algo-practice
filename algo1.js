function findMultiples(number, multiple1, multiple2) {
    var sum = 0;
    for (var i=0;i<number;i++) {
        if ((i%multiple1) === 0) {
            sum += i;
        }
        else if ((i%multiple2) === 0) {
            sum += i;
        }
    }
    return sum;
};

console.log(findMultiples(1000,3,5));

function fibonacci(maxNumber) {
    var a = 1
    var sum = b+a;
    var b = a+a;
    var totalEvens = 0
    while (b < maxNumber) {
        if (a%2 ===0) {
            totalEvens += a;
        }
        if (b%2 ===0) {
            totalEvens += b;
        }
        sum = b + a;
        a = sum;
        b = b+sum;
    }
    return totalEvens;
}

fibonacci(4000000);

// // Option 3:
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
// // Answer: 6857


function findFactors(number) {
    for (var i=2; i<=number;) {
        if (number % i ==0) {
            number /= i;
        }
        else {
            i++;
        }
    }
    console.log(i);
}

findFactors(600851475143);