// errorHandling.js
export function safeExecute(fn) {
    try {
        return fn();
    } catch (error) {
        console.error("Error occurred:", error);
        return null;
    }
}