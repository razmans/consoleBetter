var isDebugEnabled = false;
export function toggleDebug(enabled) {
    isDebugEnabled = enabled;
}
/**
 * @module Log
 * @property {message, level} - The message to log and the log level
 * @param message
 * @param level
 * @example `Log('This is an informational message.', LogLevel.INFO);`
 * @example `Log('This is a warning message.', LogLevel.WARN);`
 * @example `Log('This is an error message.', LogLevel.ERROR);`
 * @example `Log('This is a funky message!', LogLevel.FUNKY);`
 * @example `Log('This is a debug message.', LogLevel.DEBUG);`
 * @example `Log('This is an informational message.');`
 * @returns {void}
 */
export function Log(message, level = LogLevel.INFO) {
    if (level === LogLevel.DEBUG && !isDebugEnabled)
        return;
    const color = colorCodes[level] || '\x1b[0m'; // Default color
    const resetColor = '\x1b[0m'; // Reset color
    const timestamp = new Date().toISOString();
    console.log(`${color}[${timestamp}] [${level}] ${message}${resetColor}`);
}
/**
 * @module TrackPerformance
 * @param {Function} callback - The function to track performance
 * @example `TrackPerformance(() => {
 *  // Code to track performance
 * })`;
 */
export function TrackPerformance(callback, iterations = 1, threshold) {
    const times = [];
    const thresholdReached = [];
    for (let i = 0; i < iterations; i++) {
        const start = performance.now();
        callback();
        const end = performance.now();
        const duration = end - start;
        if (threshold && duration > threshold) {
            thresholdReached.push(duration > threshold);
        }
        times.push(Number(end) - Number(start));
    }
    const average = times.reduce((a, b) => a + b, 0) / times.length;
    console.log(`Execution report: Avg: ${average} ms, Min: ${Math.min(...times)} ms, Max: ${Math.max(...times)} ms`);
    if (threshold) {
        console.log(`Threshold reached ${thresholdReached.filter((reached) => reached).length} times`);
    }
}
/**
 * Enum for log levels
 * @module LogLevel
 * @readonly
 * @enum {string}
 * @property {string} DEBUG - Debug level
 * @example LogLevel.DEBUG
 */
export var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["FUNKY"] = "FUNKY";
})(LogLevel || (LogLevel = {}));
const colorCodes = {
    [LogLevel.DEBUG]: '\x1b[34m', // Blue
    [LogLevel.INFO]: '\x1b[32m', // Green
    [LogLevel.WARN]: '\x1b[33m', // Yellow
    [LogLevel.ERROR]: '\x1b[31m', // Red
    [LogLevel.FUNKY]: '\x1b[35m' // Magenta
};
