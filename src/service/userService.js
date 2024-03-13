import axios from "./axios";

const fetchAllUser = (page) => {
    return axios.get(`api/users?page=${page}`);
}
const createUser = (email, first_name, last_name) => {
    return axios.post(`/api/users`, { email, first_name, last_name });
}
const updateUser = (name, job) => {
    return axios.put("/api/users", { name, job });
}
const deleteUser = (id) => {
    return axios.delete(`/api/users/${id}`);
}

const loginApi = (email, password) => {
    return axios.post(`/api/login`, {email, password});
}
export { fetchAllUser, createUser, updateUser, deleteUser, loginApi };