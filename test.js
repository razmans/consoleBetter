import { Log, TrackPerformance, LogLevel, toggleDebug } from './index.js'; // Replace with the actual file name
function testLog() {
    console.log('--- Testing Log Function ---');
    // Test INFO level (default)
    Log('This is an informational message.'); // Should log with INFO level
    // Test different log levels
    Log('This is a debug message.', LogLevel.DEBUG); // Should not show if debug is disabled
    Log('This is a warning message.', LogLevel.WARN); // Should log with WARN level
    Log('This is an error message.', LogLevel.ERROR); // Should log with ERROR level
    Log('This is a funky message!', LogLevel.FUNKY); // Should log with FUNKY level
    // Enable debug mode and test DEBUG level
    toggleDebug(true);
    Log('This is a debug message (debug enabled).', LogLevel.DEBUG); // Should log with DEBUG level
    toggleDebug(false);
    console.log('--- End of Log Function Test ---\n');
}
function testTrackPerformance() {
    console.log('--- Testing TrackPerformance Function ---');
    // A sample function to track
    const sampleTask = () => {
        for (let i = 0; i < 1e6; i++) { } // Simple loop for delay
    };
    // Test with a single iteration
    TrackPerformance(sampleTask);
    // Test with multiple iterations
    TrackPerformance(sampleTask, 5);
    // Test with a threshold
    TrackPerformance(sampleTask, 5, 0.4); // Set a low threshold to trigger warnings
    console.log('--- End of TrackPerformance Function Test ---\n');
}
function runTests() {
    testLog();
    testTrackPerformance();
}
runTests();
