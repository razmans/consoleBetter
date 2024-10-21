declare module '@razmans/console-better' {
  export class ConsoleBetter {
    toggleDebug(): void; // Use appropriate return types
    trackPerformance(): void;
  }

  export const log: ConsoleBetter; // Ensure the log variable is correctly typed
}
