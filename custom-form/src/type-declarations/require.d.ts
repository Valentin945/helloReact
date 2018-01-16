declare var require: {
  (path: string): any;
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (path: string[], callback: (require: <T>(path:string) => T) => void) => void;
}