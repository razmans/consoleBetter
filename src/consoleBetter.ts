class ConsoleBetter {
  private debugEnabled: boolean = false;

  /* * @module log
   * @param {string} message - The message to log
   * @param {LogLevel} [level=LogLevel.INFO] - The log level
   * @example `log.better('This is an informational message.', LogLevel.INFO);`
   * @example `log.better('This is a warning message.', LogLevel.WARN);`
   * @example `log.better('This is an error message.', LogLevel.ERROR);`
   * @example `log.better('This is a funky message!', LogLevel.FUNKY);`
   * @example `log.better('This is a debug message.', LogLevel.DEBUG);`
   * @example `log.better('This is an informational message.');`
   *
   */
  better(message: string, level: LogLevel = LogLevel.INFO) {
    if (level === LogLevel.DEBUG && !this.debugEnabled) return;
    const color = colorCodes[level] || '\x1b[0m'; // Default color
    const resetColor = '\x1b[0m'; // Reset color
    console.log(`${color}[${level}] ${message}${resetColor}`);
  }

  /**
   * * @module toggleDebug
   * @param {boolean} enabled - Whether to enable debug mode
   * @example `console.better.toggleDebug(true);` //to enable debug mode
   * @example `console.better.toggleDebug(false);` //to disable debug mode
   * By default, log.better will be disabled if toggleDebug==false
   */
  toggleDebug(enabled: boolean) {
    this.debugEnabled = enabled;
  }

  /* @module trackPerformance
   * @param {Function} callback - The function to track performance
   * @example `log.trackPerformance(() => {
   *  // Code to track performance
   * })`;
   */
  trackPerformance(callback: () => void) {
    const start = performance.now();
    callback();
    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
  }
}

/**
 * Enum for log levels
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

// Create a global instance of the custom logger
export const log = new ConsoleBetter();
