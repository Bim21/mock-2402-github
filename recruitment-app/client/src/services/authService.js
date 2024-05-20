import api from "./axiosClient";

const USER_END_POINT = "/auth/applicant";
const EMPLOYER_END_POINT = "/auth/employer";

const authService = {
  loginByEmployer(credentials) {
    return api.post(`${EMPLOYER_END_POINT}/signin`, credentials);
  },
  registerByEmployer(credentials) {
    return api.post(`${EMPLOYER_END_POINT}/signup`, credentials);
  },
  loginByUser(credentials) {
    return api.post(`${USER_END_POINT}/signin`, credentials);
  },
  registerByUser(credentials) {
    return api.post(`${USER_END_POINT}/signup`, credentials);
  },
};

export default authService;
