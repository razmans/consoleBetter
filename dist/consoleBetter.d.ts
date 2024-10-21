interface Console {
    better: {
        log: (message: string) => void;
        toggleDebug: (enabled: boolean) => void;
        trackPerformance: (callback: () => void) => void;
    };
    debugEnabled: boolean;
}
