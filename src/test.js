"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary types and enums
var consoleBetter_1 = require("../src/consoleBetter"); // Update the path as necessary
// Testing the console.better functionalities
console.better.toggleDebug(true); // Enable debug logging
// Test log messages with different levels
console.better.log('This is a debug message.', consoleBetter_1.LogLevel.DEBUG); // Should log because debug is enabled
console.better.log('This is an informational message.', consoleBetter_1.LogLevel.INFO); // Should log
console.better.log('This is a warning message.', consoleBetter_1.LogLevel.WARN); // Should log
console.better.log('This is an error message.', consoleBetter_1.LogLevel.ERROR); // Should log
console.better.log('This is a funky message!', consoleBetter_1.LogLevel.FUNKY); // Should log
// Disable debug logging
console.better.toggleDebug(false);
// Test logging with debug disabled
console.better.log('This debug message should not log.', consoleBetter_1.LogLevel.DEBUG); // Should NOT log
// Track performance
console.better.trackPerformance(function () {
    // Simulate a function that takes time to execute
    var sum = 0;
    for (var i = 0; i < 1e6; i++) {
        sum += i;
    }
    console.better.log("Sum is: ".concat(sum), consoleBetter_1.LogLevel.INFO); // Should log the sum
});
// Example with debug enabled again
console.better.toggleDebug(true);
console.better.log('Debugging is back on!', consoleBetter_1.LogLevel.DEBUG); // Should log
// Example with performance tracking for another function
console.better.trackPerformance(function () {
    // Create an array using a simple loop
    var arr = [];
    for (var i = 0; i < 1e5; i++) {
        arr.push(i);
    }
    // Map over the array to double the values
    var doubled = arr.map(function (num) { return num * 2; });
    console.better.log("First few doubled values: ".concat(doubled.slice(0, 5)), consoleBetter_1.LogLevel.INFO);
});
