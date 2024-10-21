import { Log, TrackPerformance, LogLevel } from './consoleBetter';

// Test logging messages at various levels
console.log('Testing the Log function:');

Log('This is an informational message.', LogLevel.INFO);
Log('This is a warning message.', LogLevel.WARN);
Log('This is an error message.', LogLevel.ERROR);
Log('This is a funky message!', LogLevel.FUNKY);
Log('This is a debug message.', LogLevel.DEBUG);
Log('This is an informational message.'); // Defaults to INFO level

// Test performance tracking
console.log('\nTesting the TrackPerformance function:');

TrackPerformance(() => {
  // Simulate some work by using a delay
  for (let i = 0; i < 1e6; i++) {
    Math.sqrt(i);
  }
});

TrackPerformance(() => {
  // Another example with different logic
  let sum = 0;
  for (let i = 0; i < 1e5; i++) {
    sum += i;
  }
  console.log(`Sum: ${sum}`);
});
