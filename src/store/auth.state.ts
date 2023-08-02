import { http } from "@/http/http";
import { atom, selector } from "recoil";

interface IState {
  user: null | { username: string };
  initialized: boolean;
}

const defaultState: IState = {
  initialized: false,
  user: null
};

export const authState = atom({
  key: Math.random().toString(),
  default: defaultState
});

export const authSelector = selector({
  key: Math.random().toString(),
  get({ get }) {
    return get(authState);
  }
});

export const authQuery = selector({
  key: Math.random().toString(),
  async get({ get }) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return { ...defaultState, initialized: true };
      }

      //const { data } = await http.get("/users/1");
      return { user: { username: "sdsds" }, initialized: true };
    } catch (error) {
      return { ...defaultState, initialized: true };
    }
  }
});
