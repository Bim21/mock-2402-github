import api from "./axiosClient";

const END_POINT = '/company'

const companyService = {
    getAll() {
        return api.get(`${END_POINT}/findAll`);
    },
    create(body) {
        return api.post(`${END_POINT}/crate`, body);
    },
    update(id, body) {
        return api.put(`${END_POINT}/update/${id}`, body)
    },
    delete(id) {
        return api.delete(`${END_POINT}/delete/${id}`)
    }
};

export default companyService;