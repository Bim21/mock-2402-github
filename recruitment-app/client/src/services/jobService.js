import api from "./axiosClient";

const END_POINT = "/jobs";

const jobService = {
  getAll() {
    return api.get(`${END_POINT}/findAll`);
  },
  post(body, id) {
    return api.post(`${END_POINT}/postJob?employerId=${id}`, body);
  },
  update(id, body) {
    return api.put(`${END_POINT}/update/${id}`, body);
  },
  delete(id) {
    return api.delete(`${END_POINT}/delete/${id}`);
  },
  getAppliedJobs(jobId, applicantId) {
    return api.get(`${END_POINT}/${jobId}/applicants/${applicantId}}`);
  },
  getSavedJobs() {
    return api.get(`${END_POINT}/saved-jobs}`);
  },
  getViewedJobs() {
    return api.get(`${END_POINT}/viewed-jobs}`);
  },
  getJobById(id) {
    return api.get(`${END_POINT}/${id}`);
  },
  search(params) {
    return api.get(`${END_POINT}/search`, { params });
  },
};

export default jobService;
