import { host } from "./axios";

export const getToDo = async function () {
  const { data } = await host.get("api/todo");
  return data;
};

export const postToDo = async function (message, randomNumber, highPriority) {
  const res = await host.post("api/todo", {
    message,
    randomNumber,
    highPriority,
  });
};

export const removeToDo = async function (randomNumber) {
  console.log(randomNumber);
  const res = await host.delete(`api/todo/`, { data: { randomNumber } });
};

export const updateToDo = async function (message, randomNumber) {
  const res = await host.put(`api/todo/`, { message, randomNumber });
};
