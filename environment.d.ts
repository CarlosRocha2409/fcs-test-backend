export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RICK_MORTY_API: string;
      PORT: string;
    }
  }
}
