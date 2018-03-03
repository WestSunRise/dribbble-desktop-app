declare module 'module' {
  declare module.exports: any;
}

// history module
declare module 'history' {
  declare export function createBrowserHistory(props?: { }): any;
  declare export function createHashHistory(props?: { }): any;
  declare export function createMemoryHistory(props?: { }): any;
}