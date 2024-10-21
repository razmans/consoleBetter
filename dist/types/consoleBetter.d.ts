declare class ConsoleBetter {
    private debugEnabled;
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
    better(message: string, level?: LogLevel): void;
    /**
     * *
     * @module toggleDebug
     * @property {boolean} enabled - Whether to enable debug mode
     * @param {boolean} enabled - Whether to enable debug mode
     * @example `log.toggleDebug(true);` //to enable debug mode
     * @example `log.toggleDebug(false);` //to disable debug mode
     * By default, log.better will be disabled if toggleDebug==false
     */
    toggleDebug(enabled: boolean): void;
    /**
    /* @module trackPerformance
     * @param {Function} callback - The function to track performance
     * @example `log.trackPerformance(() => {
     *  // Code to track performance
     * })`;
     */
    trackPerformance(callback: () => void): void;
}
/**
 * Enum for log levels
 * @module LogLevel
 * @readonly
 * @enum {string}
 * @property {string} DEBUG - Debug level
 * @example LogLevel.DEBUG
 */
export declare enum LogLevel {
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    FUNKY = "FUNKY"
}
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
export declare const log: ConsoleBetter;
export {};
