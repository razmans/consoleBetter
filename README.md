# consoleBetter

`consoleBetter` is a TypeScript library that enhances the JavaScript console with additional logging capabilities, allowing for improved debugging and performance tracking. It provides a simple interface for logging messages with different levels, toggling debug mode, and measuring performance for specific functions.

## Features

- **Logging with Levels**: Log messages with different severity levels: DEBUG, INFO, WARN, ERROR, and FUNKY.
- **Debug Toggle**: Enable or disable debug logging dynamically.
- **Performance Tracking**: Measure and log the execution time of functions to identify performance bottlenecks.

## Installation

To install `consoleBetter`, you can use npm:

NPM
```bash
npx jsr add @razmans/console-better
```

Deno
```bash
deno add jsr:@razmans/console-better
```

Yarn
```bash
yarn dlx jsr add @razmans/console-better
```

Pnpm
```bash
pnpm dlx jsr add @razmans/console-better
```

Bun
```bash
bunx jsr add @razmans/console-better
```

## Usage

### Importing the Library

First, import the `consoleBetter` library in your TypeScript file:

```typescript
import { LogLevel, log } from 'console.better';
```

### Logging Messages

You can log messages using different log levels:

```typescript
log.better('This is a debug message.', LogLevel.DEBUG);
log.better('This is an informational message.', LogLevel.INFO);
log.better('This is a warning message.', LogLevel.WARN);
log.better('This is an error message.', LogLevel.ERROR);
log.better('This is a funky message!', LogLevel.FUNKY);
```

### Toggling Debug Mode

You can enable or disable debug logging:

```typescript
log.toggleDebug(true);  // Enable debug logging
log.toggleDebug(false); // Disable debug logging
```

### Performance Tracking

You can track the performance of any function by wrapping it in `trackPerformance`:

```typescript
log.trackPerformance(() => {
  // Your code here
});
```

### Example

Here's a complete example demonstrating the usage of `consoleBetter`:

```typescript
import { LogLevel } from 'console.better';

// Enable debug logging
log.toggleDebug(true);

// Log messages
log.better('This is a debug message.', LogLevel.DEBUG);
log.better('This is an informational message.', LogLevel.INFO);

// Track performance
log.trackPerformance(() => {
  let sum = 0;
  for (let i = 0; i < 1e6; i++) {
    sum += i;
  }
  log.better(`Sum is: ${sum}`, LogLevel.INFO);
});
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## Acknowledgements

Special thanks to the community for their support and feedback.
```