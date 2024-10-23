var isDebugEnabled: boolean = false;

/**
 * @module toggleDebug
 * @param {boolean} enabled - Enable or disable debug mode
 * @example `toggleDebug(true); // Enable debug mode`
 * @example `toggleDebug(false); // Disable debug mode`
 * @returns {void}
 * @description Enable or disable debug mode
 */
export function toggleDebug(enabled: boolean): void {
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
export function Log(message: string, level: LogLevel = LogLevel.INFO): void {
  if (level === LogLevel.DEBUG && !isDebugEnabled) return;

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
 * @param {number} iterations - The number of iterations to run the callback
 * @example `TrackPerformance(() => {
 * // Code to track perform 1000 times
 * }, 1000);`
 * @param {number} threshold - The threshold to track performance
 * @example `TrackPerformance(() => {
 * // Code to set threshold to 7 ms
 * }, 1000, 7);`
 */
export function TrackPerformance(
  callback: () => void,
  iterations: number = 1,
  threshold?: number
): void {
  const times: number[] = [];
  const thresholdReached: boolean[] = [];
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
  console.log(
    `Execution report: Avg: ${average} ms, Min: ${Math.min(
      ...times
    )} ms, Max: ${Math.max(...times)} ms`
  );
  if (threshold) {
    console.log(
      `Threshold reached ${
        thresholdReached.filter((reached) => reached).length
      } times`
    );
  }
}

/**
 * Enum for log levels
 * @module LogLevel
 * @readonly
 * @enum {string}
 * @property {string} DEBUG - Debug level
 * @property {string} INFO - Information level
 * @property {string} WARN - Warning level
 * @property {string} ERROR - Error level
 * @property {string} FUNKY - Funky level
 * @property {string} HIGH - High level
 * @property {string} MEDIUM - Medium level
 * @property {string} LOW - Low level
 * @property {string} PIKACHU - Pikachu level
 * @example LogLevel.DEBUG
 */
export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FUNKY = 'FUNKY',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  PIKACHU = 'PIKACHU'
}

const colorCodes: { [key in LogLevel]: string } = {
  [LogLevel.DEBUG]: '\x1b[34m', // Blue
  [LogLevel.INFO]: '\x1b[32m', // Green
  [LogLevel.WARN]: '\x1b[33m', // Yellow
  [LogLevel.ERROR]: '\x1b[31m', // Red
  [LogLevel.HIGH]: '\x1b[91m', // Bright Red
  [LogLevel.MEDIUM]: '\x1b[93m', // Bright Yellow
  [LogLevel.LOW]: '\x1b[36m', // Cyan
  [LogLevel.FUNKY]: '\x1b[35m', // Magenta
  [LogLevel.PIKACHU]: '\x1b[93;1m' // Brighter Yellow
};
