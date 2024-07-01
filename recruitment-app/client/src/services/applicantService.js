import api from "./axiosClient";

const END_POINT = "/applicants";

const applicantService = {
  getAll() {
    return api.get(`${END_POINT}/findAll`);
  },
  create(body) {
    return api.post(`${END_POINT}/create`, body);
  },
  update(id, body) {
    return api.put(`${END_POINT}/${id}`, body);
  },
  delete(id) {
    return api.delete(`${END_POINT}/${id}`);
  },
  apply(applicantId, jobId) {
    return api.post(`${END_POINT}/${applicantId}/apply/${jobId}`);
  },
  getAppliedJobs(applicantId) {
    return api.get(`${END_POINT}/${applicantId}/applied-jobs`);
  },
  getSavedJobs(applicantId) {
    return api.get(`${END_POINT}/${applicantId}/saved-jobs}`);
  },
  getViewedJobs(applicantId) {
    return api.get(`${END_POINT}/${applicantId}/viewed-jobs}`);
  },
};

export default applicantService;
