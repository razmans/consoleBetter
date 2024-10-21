declare global {
  interface Console {
    better: {
      log: (message: string, level?: LogLevel) => void;
      toggleDebug: (enabled: boolean) => void;
      trackPerformance: (callback: () => void) => void;
    };
    debugEnabled: boolean; // Add debugEnabled as a property
  }
}
