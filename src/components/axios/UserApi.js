import { host } from "./axios";

export const login = async function (email, password) {
  const { data } = await host.post("api/user/login", { email, password });
  console.log({ data });
};
