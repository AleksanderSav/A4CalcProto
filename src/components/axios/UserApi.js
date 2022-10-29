import { host } from "./axios";

export const login = async function (email, password) {
    const { data } = await host.post("api/user/login", { email, password });
    console.log({ data });
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
