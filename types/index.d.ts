declare module "@vlodia/logger" {
  export class Logger {
    log(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    success(message: string): void;
    private formatPrefix(): void;
  }
}
