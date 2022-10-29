import { host } from "./axios";
import jwtDecode from "jwt-decode";

export const login = async function (email, password) {
    console.log({ email, password });
    const { data } = await host.post("api/user/login", { email, password });
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
};

export const createUser = async function (
    email,
    password,
    alias,
    role,
    priceCategory
) {
    const { data } = await host.post("api/user", {
        email,
        password,
        alias,
        role,
        priceCategory,
    });
    console.log(data);
};