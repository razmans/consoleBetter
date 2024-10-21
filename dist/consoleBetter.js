"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.LogLevel = void 0;
var ConsoleBetter = /** @class */ (function () {
    function ConsoleBetter() {
        this.debugEnabled = false;
    }
    /**
     * @module better
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
    ConsoleBetter.prototype.better = function (message, level) {
        if (level === void 0) { level = LogLevel.INFO; }
        if (level === LogLevel.DEBUG && !this.debugEnabled)
            return;
        var color = colorCodes[level] || '\x1b[0m'; // Default color
        var resetColor = '\x1b[0m'; // Reset color
        console.log("".concat(color, "[").concat(level, "] ").concat(message).concat(resetColor));
    };
    /**
     * *
     * @module toggleDebug
     * @property {boolean} enabled - Whether to enable debug mode
     * @param {boolean} enabled - Whether to enable debug mode
     * @example `log.toggleDebug(true);` //to enable debug mode
     * @example `log.toggleDebug(false);` //to disable debug mode
     * By default, log.better will be disabled if toggleDebug==false
     */
    ConsoleBetter.prototype.toggleDebug = function (enabled) {
        this.debugEnabled = enabled;
    };
    /* @module trackPerformance
     * @param {Function} callback - The function to track performance
     * @example `log.trackPerformance(() => {
     *  // Code to track performance
     * })`;
     */
    ConsoleBetter.prototype.trackPerformance = function (callback) {
        var start = performance.now();
        callback();
        var end = performance.now();
        console.log("Execution time: ".concat(end - start, " ms"));
    };
    return ConsoleBetter;
}());
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
var colorCodes = (_a = {},
    _a[LogLevel.DEBUG] = '\x1b[34m',
    _a[LogLevel.INFO] = '\x1b[32m',
    _a[LogLevel.WARN] = '\x1b[33m',
    _a[LogLevel.ERROR] = '\x1b[31m',
    _a[LogLevel.FUNKY] = '\x1b[35m' // Magenta
,
    _a);
/**
 * Custom logger
 * @module ConsoleBetter
 * @example `const log: ConsoleBetter = new ConsoleBetter();`
 * @example `log.better('This is an informational message.', LogLevel.INFO);`
 * @example `log.better('This is a warning message.', LogLevel.WARN);`
 * @example `log.better('This is an error message.', LogLevel.ERROR);`
 * @example `log.better('This is a funky message!', LogLevel.FUNKY);`
 * @example `log.better('This is a debug message.', LogLevel.DEBUG);`
 * @example `log.better('This is an informational message.');`
 * @example `log.toggleDebug(true);` //to enable debug mode
 * @example `log.toggleDebug(false);` //to disable debug mode
 * @example `log.trackPerformance(() => {
 * // Code to track performance
 * })`; *
 */
// Create a global instance of the custom logger
exports.log = new ConsoleBetter();
