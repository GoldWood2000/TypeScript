declare var v1: () => void;


declare module 'pkg' {
  const handle: () => boolean
}

declare module 'pkg2' {
  const handle: () => boolean
  export default handle;
}

declare module '*.md' {
  const raw: string;
  export default raw
}

declare const errorReporter: (err: any) => any

declare interface Window {
  userTracker: (e: string) => void
}