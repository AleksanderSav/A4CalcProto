import axios from "axios";

const adr = "http://localhost:3002/";
const intAdr = "http://a4test.na4u.ru/";

const host = axios.create({
  baseURL: adr,
});

export { host };
