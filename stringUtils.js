// stringUtils.js
export function reverseString(str) {
    return str.split('').reverse().join('');
}

export function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}