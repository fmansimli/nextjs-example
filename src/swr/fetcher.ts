import { http } from "@/http/http";

export const fetcher = (url: string) => http.get(url).then((res) => res.data);

// import type { AxiosRequestConfig } from "axios";
// import { http } from "@/http/http";

// interface IConfig {
//   url: string;
//   baseURL: string;
//   method: "get" | "post" | "put" | "delete" | "patch" | "options";
// }

// export const fetcher = (key: string | IConfig) => {
//   if (typeof key === "string") {
//     return http.get(key).then((res) => res.data);
//   }

//   return async (key: IConfig, { arg }: { arg: AxiosRequestConfig }) => {
//     return http[key.method || "get"](key.url, {
//       [key.baseURL ? "baseURL" : ""]: key.baseURL,
//       ...arg
//     }).then((res) => res.data);
//   };
// };
