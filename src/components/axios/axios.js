import axios from "axios";

const adr = "http://localhost:3002/";
const intAdr = "http://a4test.na4u.ru/";

const host = axios.create({
    baseURL: adr,
});

function axiosAuthInterceptor(config) {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
}

host.interceptors.request.use(axiosAuthInterceptor);

export { host };
