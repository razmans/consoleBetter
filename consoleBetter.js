"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = void 0;
exports.Log = Log;
exports.TrackPerformance = TrackPerformance;
/**
 * @module Log
 * @property {message, level} - The message to log and the log level
 * @param message
 * @param level
 * @example `log.better('This is an informational message.', LogLevel.INFO);`
 * @example `log.better('This is a warning message.', LogLevel.WARN);`
 * @example `log.better('This is an error message.', LogLevel.ERROR);`
 * @example `log.better('This is a funky message!', LogLevel.FUNKY);`
 * @example `log.better('This is a debug message.', LogLevel.DEBUG);`
 * @example `log.better('This is an informational message.');`
 * @returns {void}
 */
function Log(message, level = LogLevel.INFO) {
    const color = colorCodes[level] || '\x1b[0m'; // Default color
    const resetColor = '\x1b[0m'; // Reset color
    console.log(`${color}[${level}] ${message}${resetColor}`);
}
/**
  /* @module TrackPerformance
   * @param {Function} callback - The function to track performance
   * @example `log.trackPerformance(() => {
   *  // Code to track performance
   * })`;
   */
function TrackPerformance(callback) {
    const start = performance.now();
    callback();
    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
}
/**
 * Enum for log levels
 * @module LogLevel
 * @readonly
 * @enum {string}
 * @property {string} DEBUG - Debug level
 * @example LogLevel.DEBUG
 */
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["FUNKY"] = "FUNKY";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
const colorCodes = {
    [LogLevel.DEBUG]: '\x1b[34m', // Blue
    [LogLevel.INFO]: '\x1b[32m', // Green
    [LogLevel.WARN]: '\x1b[33m', // Yellow
    [LogLevel.ERROR]: '\x1b[31m', // Red
    [LogLevel.FUNKY]: '\x1b[35m' // Magenta
};
