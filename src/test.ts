// Import necessary types and enums
import { LogLevel } from '../src/consoleBetter'; // Update the path as necessary

// Testing the console.better functionalities
console.better.toggleDebug(true); // Enable debug logging

// Test log messages with different levels
console.better.log('This is a debug message.', LogLevel.DEBUG); // Should log because debug is enabled
console.better.log('This is an informational message.', LogLevel.INFO); // Should log
console.better.log('This is a warning message.', LogLevel.WARN); // Should log
console.better.log('This is an error message.', LogLevel.ERROR); // Should log
console.better.log('This is a funky message!', LogLevel.FUNKY); // Should log

// Disable debug logging
console.better.toggleDebug(false);

// Test logging with debug disabled
console.better.log('This debug message should not log.', LogLevel.DEBUG); // Should NOT log

// Track performance
console.better.trackPerformance(() => {
  // Simulate a function that takes time to execute
  let sum = 0;
  for (let i = 0; i < 1e6; i++) {
    sum += i;
  }
  console.better.log(`Sum is: ${sum}`, LogLevel.INFO); // Should log the sum
});

// Example with debug enabled again
console.better.toggleDebug(true);
console.better.log('Debugging is back on!', LogLevel.DEBUG); // Should log

// Example with performance tracking for another function
console.better.trackPerformance(() => {
  // Create an array using a simple loop
  const arr: number[] = [];
  for (let i = 0; i < 1e5; i++) {
    arr.push(i);
  }

  // Map over the array to double the values
  const doubled = arr.map((num) => num * 2);
  console.better.log(
    `First few doubled values: ${doubled.slice(0, 5)}`,
    LogLevel.INFO
  );
});
