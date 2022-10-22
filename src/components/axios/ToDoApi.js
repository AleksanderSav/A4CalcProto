import { host } from "./axios";

export const getToDo = async function () {
  const { data } = await host.get("api/todo");
  return data;
};

export const postToDo = async function (message, randomNumber) {
  const res = await host.post("api/todo", { message, randomNumber });
};
