declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_HOST_URL: string;
    }
  }
}
export {};
