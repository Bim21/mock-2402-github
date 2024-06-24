import api from "./axiosClient";

const END_POINT = '/applicants'

const applicantService = {
    getAll() {
        return api.get(`${END_POINT}/findAll`);
    },
    create(body) {
        return api.post(`${END_POINT}/create`, body);
    },
    update(id, body) {
        return api.put(`${END_POINT}/${id}`, body)
    },
    delete(id) {
        return api.delete(`${END_POINT}/delete/${id}`)
    }, 
    getAppliedJobs(applicantId, jobId) {
        return api.post(`${END_POINT}/${applicantId}/apply/${jobId}`);
      },

};

export default applicantService;