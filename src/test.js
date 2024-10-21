"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consoleBetter_1 = require("./consoleBetter");
// Enable debug mode
consoleBetter_1.log.toggleDebug(true);
// Test: Log different levels
console.log('Test: Logging different levels');
consoleBetter_1.log.better('This is a DEBUG message', consoleBetter_1.LogLevel.DEBUG);
consoleBetter_1.log.better('This is an INFO message', consoleBetter_1.LogLevel.INFO);
consoleBetter_1.log.better('This is a WARN message', consoleBetter_1.LogLevel.WARN);
consoleBetter_1.log.better('This is an ERROR message', consoleBetter_1.LogLevel.ERROR);
consoleBetter_1.log.better('This is a FUNKY message', consoleBetter_1.LogLevel.FUNKY);
// Disable debug mode and test
console.log('\nTest: Logging when DEBUG is disabled');
consoleBetter_1.log.toggleDebug(false);
consoleBetter_1.log.better('This DEBUG message should not appear', consoleBetter_1.LogLevel.DEBUG);
consoleBetter_1.log.better('This INFO message should appear', consoleBetter_1.LogLevel.INFO);
// Test: Performance tracking
console.log('\nTest: Performance tracking');
consoleBetter_1.log.trackPerformance(() => {
    // Performance test for a sample task
    let sum = 0;
    for (let i = 0; i < 1e6; i++) {
        sum += i;
    }
    consoleBetter_1.log.better(`Sum is: ${sum}`, consoleBetter_1.LogLevel.INFO);
});
