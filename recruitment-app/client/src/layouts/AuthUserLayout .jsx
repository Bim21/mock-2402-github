import { Navigate } from "react-router-dom";
import { getUserInfo } from "../utils/funcHelpers";

const AuthUserLayout = ({ children, isPublic = false }) => {
  const userInfo = getUserInfo();

  if (isPublic && userInfo) {
    return <Navigate to="/" />;
  }

  if (!isPublic && !userInfo) {
    return <Navigate to="/login-user" />;
  }

  return children;
};

export default AuthUserLayout;
