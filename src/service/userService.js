import axios from "./axios";

const fetchAllUser = (page) => {
    return axios.get(`api/users?page=${page}`);
}
const createUser = (email, first_name, last_name) => {
    return axios.post(`/api/users`, { email, first_name, last_name });
}
const updateUser = (name, job) => {
    return axios.put("/api/users/", { name, job });
}

export { fetchAllUser, createUser, updateUser };