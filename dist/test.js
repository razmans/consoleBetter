import { log, LogLevel } from './consoleBetter';
// Enable debug mode
log.toggleDebug(true);
// Test: Log different levels
console.log('Test: Logging different levels');
log.better('This is a DEBUG message', LogLevel.DEBUG);
log.better('This is an INFO message', LogLevel.INFO);
log.better('This is a WARN message', LogLevel.WARN);
log.better('This is an ERROR message', LogLevel.ERROR);
log.better('This is a FUNKY message', LogLevel.FUNKY);
// Disable debug mode and test
console.log('\nTest: Logging when DEBUG is disabled');
log.toggleDebug(false);
log.better('This DEBUG message should not appear', LogLevel.DEBUG);
log.better('This INFO message should appear', LogLevel.INFO);
// Test: Performance tracking
console.log('\nTest: Performance tracking');
log.trackPerformance(() => {
    // Performance test for a sample task
    let sum = 0;
    for (let i = 0; i < 1e6; i++) {
        sum += i;
    }
    log.better(`Sum is: ${sum}`, LogLevel.INFO);
});
