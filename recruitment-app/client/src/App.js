import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginUser from "./pages/LoginUser";
import SearchJobPage from "./pages/SearchJobPage";
import CompanyPage from "./pages/CompanyPage";
import Register from "./pages/Register";
import JobPage from "./pages/JobPage";
import LoginEmployer from "./pages/EmployerPage/LoginEmployer";
import RegisterEmployer from "./pages/EmployerPage/RegisterEmployer";
import EmployerPage from "./pages/EmployerPage/EmployerPage";
import RecruitmentPage from "./pages/EmployerPage/RecruitmentPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthEmployerLayout from "./layouts/AuthEmployerLayout";
import AuthUserLayout from "./layouts/AuthUserLayout ";
import AppliedJobs from "./pages/AppliedJobs";
import ApplicantPage from "./pages/ApplicantPage/ApplicantPage";
import JobDetailPage from "./pages/JobDetailPage";
import UserDetail from "./pages/EmployerPage/section/UserDetail";
import NotificationPage from "./pages/EmployerPage/NotificationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-job" element={<SearchJobPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/applicant-page" element={<ApplicantPage />} />

        <Route
          path="/login-user"
          element={
            <AuthUserLayout isPublic>
              <LoginUser />
            </AuthUserLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthUserLayout isPublic>
              <Register />
            </AuthUserLayout>
          }
        />
        <Route path="/job" element={<JobPage />} />
        <Route
          path="/loginEmployer"
          element={
            <AuthEmployerLayout isPublic>
              <LoginEmployer />
            </AuthEmployerLayout>
          }
        />
        <Route path="/registerEmployer" element={<RegisterEmployer />} />
        <Route
          path="/employerPage"
          element={
            <AuthEmployerLayout>
              <EmployerPage />
            </AuthEmployerLayout>
          }
        />
        <Route path="/job-posting" element={<RecruitmentPage />} />
        <Route path="/job-applied/:type" element={<AppliedJobs />} />
        <Route path="/jobs/:jobId" element={<JobDetailPage />} />
        <Route path="/applicantPage" element={<ApplicantPage />} />
        <Route path="/users" element={<UserDetail />} />
        <Route path="/notification" element={<NotificationPage />} />
      </Routes>
      <ToastContainer theme="colored" />
    </BrowserRouter>
  );
}

export default App;
