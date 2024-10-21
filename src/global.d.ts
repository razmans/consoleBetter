import { LogLevel } from './consoleBetter'; // Adjust the import path based on your structure

// Augmenting the global Console interface
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
