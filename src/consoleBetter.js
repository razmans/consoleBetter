"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorCodes = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["FUNKY"] = "FUNKY";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
exports.colorCodes = (_a = {},
    _a[LogLevel.DEBUG] = '\x1b[34m',
    _a[LogLevel.INFO] = '\x1b[32m',
    _a[LogLevel.WARN] = '\x1b[33m',
    _a[LogLevel.ERROR] = '\x1b[31m',
    _a[LogLevel.FUNKY] = '\x1b[35m' // Magenta
,
    _a);
console.debugEnabled = false; // Initialize debugEnabled
console.better = {
    log: function (message, level) {
        if (level === void 0) { level = LogLevel.INFO; }
        if (level === LogLevel.DEBUG && !console.debugEnabled)
            return;
        var color = exports.colorCodes[level] || '\x1b[0m'; // Default color if level not found
        var resetColor = '\x1b[0m'; // Reset color
        console.log("".concat(color, "[").concat(level, "] ").concat(message).concat(resetColor));
    },
    toggleDebug: function (enabled) {
        console.debugEnabled = enabled;
    },
    trackPerformance: function (callback) {
        var start = performance.now();
        callback();
        var end = performance.now();
        console.log("Execution time: ".concat(end - start, " ms"));
    }
};
