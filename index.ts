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
export function Log(message: string, level: LogLevel = LogLevel.INFO): void {
  const color = colorCodes[level] || '\x1b[0m'; // Default color
  const resetColor = '\x1b[0m'; // Reset color
  console.log(`${color}[${level}] ${message}${resetColor}`);
}

/**
 * @module TrackPerformance
 * @param {Function} callback - The function to track performance
 * @example `TrackPerformance(() => {
 *  // Code to track performance
 * })`;
 */
export function TrackPerformance(callback: () => void): void {
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
export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FUNKY = 'FUNKY'
}

const colorCodes: { [key in LogLevel]: string } = {
  [LogLevel.DEBUG]: '\x1b[34m', // Blue
  [LogLevel.INFO]: '\x1b[32m', // Green
  [LogLevel.WARN]: '\x1b[33m', // Yellow
  [LogLevel.ERROR]: '\x1b[31m', // Red
  [LogLevel.FUNKY]: '\x1b[35m' // Magenta
};
