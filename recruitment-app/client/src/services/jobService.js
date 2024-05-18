import api from "./axiosClient";


const jobService = {
    getAll() {
        return api.get("/jobs/findAll");
    },
    create(body) {
        return api.post("/jobs/create", body);
    },
    update(id) {
        return api.put(`/jobs/update/${id}`)
    },
    delete(id) {
        return api.delete(`/jobs/delete/${id}`)
    }
};

export default jobService;