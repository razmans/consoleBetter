declare module '@razmans/console-better' {
  export class ConsoleBetter {
    toggleDebug(): any; // Declare method with 'any' for now
    trackPerformance(): any; // Declare method with 'any' for now
  }

  export const log: ConsoleBetter; // Declare your log variable with 'any' type
}
