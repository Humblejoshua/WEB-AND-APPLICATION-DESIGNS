//Write a function that returns the first n numbers in the Fibonacci sequence. The Fibonacci sequence is defined as follows:
//F(0) = 0
//F(1) = 1
//F(n) = F(n-1) + F(n-2) for n > 1

function fibonacci(n) {
    if (n <= 0) {
        return []; // Return an empty array for non-positive n
    } else if (n === 1) {
        return [0]; // Return the first Fibonacci number
    } else if (n === 2) {
        return [0, 1]; // Return the first two Fibonacci numbers
    }

    // Start with the first two Fibonacci numbers
    const fibSequence = [0, 1];

    // Calculate the rest of the Fibonacci numbers
    for (let i = 2; i < n; i++) {
        const nextFib = fibSequence[i - 1] + fibSequence[i - 2];
        fibSequence.push(nextFib);
    }

    return fibSequence;
}

//Write a recursive function to calculate the factorial of a given number n. The factorial of a number is the product of all positive integers up to that number.
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    } else if (n === 0 || n === 1) {
        return 1; // Base case: factorial of 0 and 1 is 1
    } else {
        return n * factorial(n - 1); // Recursive case
    }
}

//Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). Ignore spaces, punctuation, and capitalization.
function isPalindrome(str) {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    const normalizedStr = str
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters

    // Check if the normalized string is the same forwards and backwards
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    return normalizedStr === reversedStr;
}


