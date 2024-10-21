declare global {
  interface Console {
    better: {
      log: (message: string, level?: LogLevel) => void;
      toggleDebug: (enabled: boolean) => void;
      trackPerformance: (callback: () => void) => void;
    };
    debugEnabled: boolean;
  }
}

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FUNKY = 'FUNKY'
}

export const colorCodes: { [key in LogLevel]: string } = {
  [LogLevel.DEBUG]: '\x1b[34m', // Blue
  [LogLevel.INFO]: '\x1b[32m', // Green
  [LogLevel.WARN]: '\x1b[33m', // Yellow
  [LogLevel.ERROR]: '\x1b[31m', // Red
  [LogLevel.FUNKY]: '\x1b[35m' // Magenta
};

(console as any).debugEnabled = false; // Initialize debugEnabled

console.better = {
  log: (message: string, level: LogLevel = LogLevel.INFO) => {
    if (level === LogLevel.DEBUG && !console.debugEnabled) return;
    const color = colorCodes[level] || '\x1b[0m'; // Default color if level not found
    const resetColor = '\x1b[0m'; // Reset color
    console.log(`${color}[${level}] ${message}${resetColor}`);
  },
  toggleDebug: (enabled: boolean) => {
    console.debugEnabled = enabled;
  },
  trackPerformance: (callback: () => void) => {
    const start = performance.now();
    callback();
    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
  }
};
