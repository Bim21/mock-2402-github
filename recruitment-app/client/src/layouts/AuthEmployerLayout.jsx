import { Navigate } from "react-router-dom";
import { getEmployerInfo } from "../utils/funcHelpers";

const AuthEmployerLayout = ({ children, isPublic = false }) => {
  const employerInfo = getEmployerInfo();

  if (isPublic && employerInfo) {
    return <Navigate to="/employerPage" />;
  }

  if (!isPublic && !employerInfo) {
    return <Navigate to="/loginEmployer" />;
  }

  return children;
};

export default AuthEmployerLayout;
