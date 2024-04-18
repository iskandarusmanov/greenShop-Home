import { request } from "./httpRequest";

export const fetchUser = (username, password) => request({method: "get", url: `users?username=${username}&password=${password}`});

export const addUser = (data) => request({method: "post", url: "users", data });