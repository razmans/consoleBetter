"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consoleBetter_1 = require("./consoleBetter");
// Test logging messages at various levels
console.log('Testing the Log function:');
(0, consoleBetter_1.Log)('This is an informational message.', consoleBetter_1.LogLevel.INFO);
(0, consoleBetter_1.Log)('This is a warning message.', consoleBetter_1.LogLevel.WARN);
(0, consoleBetter_1.Log)('This is an error message.', consoleBetter_1.LogLevel.ERROR);
(0, consoleBetter_1.Log)('This is a funky message!', consoleBetter_1.LogLevel.FUNKY);
(0, consoleBetter_1.Log)('This is a debug message.', consoleBetter_1.LogLevel.DEBUG);
(0, consoleBetter_1.Log)('This is an informational message.'); // Defaults to INFO level
// Test performance tracking
console.log('\nTesting the TrackPerformance function:');
(0, consoleBetter_1.TrackPerformance)(() => {
    // Simulate some work by using a delay
    for (let i = 0; i < 1e6; i++) {
        Math.sqrt(i);
    }
});
(0, consoleBetter_1.TrackPerformance)(() => {
    // Another example with different logic
    let sum = 0;
    for (let i = 0; i < 1e5; i++) {
        sum += i;
    }
    console.log(`Sum: ${sum}`);
});
