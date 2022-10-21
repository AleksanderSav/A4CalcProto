import { host } from "./axios";

export const getToDo = async function () {
  const { data } = await host.get("api/todo");
  return data;
};
