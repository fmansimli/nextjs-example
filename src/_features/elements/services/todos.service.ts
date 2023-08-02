import { http } from "@/http/http";

export const addTodo = async (todo: any) => {
  return http.post("/api/v1/todos", todo).then((res) => res.data);
};

export const updateTodo = async (todo: any, id: number | string) => {
  return http.patch("/api/v1/todos/" + id, todo).then((res) => res.data);
};

export const deleteTodo = async (id: number | string) => {
  return http.delete("/api/v1/todos/" + id).then((res) => res.data);
};

export const createTodo = async (url: string, { arg }: { arg: any }) => {
  return http.post(url, arg).then((res) => res.data);
};
