import axios from "axios";

const USER_LOGIN = "http://localhost:8082/user/login";
const USER_REGISTRATION = "http://localhost:8082/user/register";

export const userLogin = (formData) => axios.post(USER_LOGIN, formData);
export const userRegistration = (formData) => axios.post(USER_REGISTRATION, formData);