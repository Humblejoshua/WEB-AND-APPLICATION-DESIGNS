// arrayUtils.js
export function findMax(arr) {
    return Math.max(...arr);
}

export function findMin(arr) {
    return Math.min(...arr);
}

export function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}